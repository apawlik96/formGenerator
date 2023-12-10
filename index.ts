class ElementCreator {
    createElement(tagName: string, attributes?: Record<string, string>): HTMLElement {
        const element = document.createElement(tagName);

        if (attributes) {
            Object.keys(attributes).forEach((key) => {
                element.setAttribute(key, attributes[key]);
            });
        }

        return element;
    }
}

class FormElementCreator {
    private elementCreator: ElementCreator;

    constructor(elementCreator: ElementCreator) {
        this.elementCreator = elementCreator;
    }

    createInput(form: HTMLFormElement, element: any): void {
        const input = this.elementCreator.createElement('input') as HTMLInputElement;
        this.setInputAttributes(input, element);
        form.appendChild(input);
    }

    createLabel(form: HTMLFormElement, element: any): void {
        const label = this.elementCreator.createElement('label') as HTMLLabelElement;
        label.textContent = element.for;
        this.createInput(form, element);
        form.appendChild(label);
    }

    createInputFields(form: HTMLFormElement, element: any): void {
        const paragraph = this.elementCreator.createElement('div') as HTMLDivElement;
        paragraph.textContent = element.name;
        form.appendChild(paragraph);
        this.createInput(form, element);
    }

    private setInputAttributes(input: HTMLInputElement, element: any): void {
        input.type = element.type;
        input.name = element.name;
        element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
    }

    createFormElement(form: HTMLFormElement, element: any): void {
        switch (element.class) {
            case 'selects':
                this.createLabel(form, element);
                break;
            case 'buttons':
                this.createInput(form, element);
                break;
            case 'fields':
                this.createInputFields(form, element);
                break;
            default:
                console.log('field type not recognized');
        }
    }
}

class FormGenerator {
    private config: {
        fields: Array<{ class: string; name: string; type: string; placeholder: string }>;
        selects: Array<{ class: string; type: string; name: string; for: string }>;
        data: Array<{ class: string; type: string; name: string }>;
        buttons: Array<{ class: string; name: string; type: string; value: string }>;
    };

    private elementCreator: ElementCreator;
    private formElementCreator: FormElementCreator;

    constructor(config: any) {
        this.config = config;
        this.elementCreator = new ElementCreator();
        this.formElementCreator = new FormElementCreator(this.elementCreator);
    }

    generateForm(): HTMLFormElement {
        const form = this.elementCreator.createElement('form') as HTMLFormElement;
        const elements = [...this.config.selects, ...this.config.fields, ...this.config.data, ...this.config.buttons];

        elements.forEach((element) => {
            this.formElementCreator.createFormElement(form, element);
        });

        return form;
    }
}

class FormGeneratorOneStep {
    private formGenerator: FormGenerator;

    constructor(formGenerator: FormGenerator) {
        this.formGenerator = formGenerator;
        new OneStepFormStyles();
    }

    generateForm(): HTMLFormElement {
        const form = this.formGenerator.generateForm();
        return form;
    }
}

class OneStepFormStyles  {
    constructor() {
        this.addStyles();
    }

    private addStyles(): void {
        const styles = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    
        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
    
        .fields, .selects, .data, .buttons {
            margin-bottom: 15px;
        }
    
        div {
            margin-bottom: 5px;
        }
    
        p {
            margin-top: -17px;
            margin-bottom: 10px;
            font-size: 10px;
        }
    
        input:not([type="radio"]) {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 8px;
            margin-bottom: 20px;
        }
    
        input[type="radio"], label {
            margin: 20px 5px;
        }
    
        input[type="submit"] {
            background-color: #4caf50;
            color: #fff;
            font-size: 16px;
            border-radius: 10px;
            padding 10px;
            width: 120px;
            margin-left: auto;
            margin-right: auto;
            cursor: pointer;
        }
    
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    
        .error {
            border: 1px solid #ff0000;
        }
        `;

        const styleElement = document.createElement('style');
        styleElement.appendChild(document.createTextNode(styles));

        document.body.appendChild(styleElement);
    }
}

function validateFormErrorStyle(): void {
    const form = document.querySelector('form') as HTMLFormElement;
    const elements = form.querySelectorAll('input, select');

    const errorStyle = document.createElement('style');
    errorStyle.textContent = `
        .error {
            border: 1px solid #ff0000;
        }
    `;

    document.head.appendChild(errorStyle);

    elements.forEach((element) => {
        if ((element instanceof HTMLInputElement || element instanceof HTMLSelectElement) &&
            (element as HTMLInputElement | HTMLSelectElement).value.trim() === '' && element.type !== 'submit') {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    });

}

function validationRules(form: HTMLFormElement): void {
    const emailInput = form.querySelector<HTMLInputElement>('[name="Email"]');
    const phoneInput = form.querySelector<HTMLInputElement>('[name="Phone"]');
    const passwordInput = form.querySelector<HTMLInputElement>('[name="Password"]');
    const confirmPasswordInput = form.querySelector<HTMLInputElement>('[name="Confirm Password"]');

    const email = emailInput ? emailInput.value : '';
    const phone = phoneInput ? phoneInput.value : '';
    const password = passwordInput ? passwordInput.value : '';
    const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneNumberValue = parseInt(phone).toString();

    const formValidator = new FormValidator(form);

    if (confirmPassword !== password) {
        formValidator.createElementsValidation('Passwords do not match', '[name="Confirm Password"]');
    }

    if (phoneNumberValue.length !== 9) {
        formValidator.createElementsValidation('Invalid phone number', '[name="Phone"]');
    }

    if (emailInput && !emailRegex.test(email)) {
        formValidator.createElementsValidation('Email is not valid', '[name="Email"]');
    }
}

class FormValidator {
    private form: HTMLFormElement;

    constructor(form: HTMLFormElement) {
        this.form = form;
    }

    public createElementsValidation(errorMsg: string, elementConfigFields: string): void {
        const errorMsgElement: HTMLParagraphElement = document.createElement('p');
        this.form.appendChild(errorMsgElement);
        errorMsgElement.textContent = errorMsg;
        const elementInput: HTMLInputElement | null = this.form.querySelector(elementConfigFields);
        
        if (elementInput) {
            const elementInputNode: Node | null = elementInput.parentNode;
            if (elementInputNode) {
                elementInputNode.insertBefore(errorMsgElement, elementInput.nextSibling);
            }
        }
    }
}

const config = {
    fields: [{
        class: 'fields',
        name: 'Username',
        type: 'text',
        placeholder: 'Enter Username'
    },
    {
        class: 'fields',
        name: 'First Name',
        type: 'text',
        placeholder: 'Enter First Name'
    },
    {
        class: 'fields',
        name: 'Last Name',
        type: 'text',
        placeholder: 'Enter Last Name'
    },
    {
        class: 'fields',
        name: 'Email',
        type: 'email',
        placeholder: 'Enter Email'
    },
    {
        class: 'fields',
        name: 'Phone',
        type: 'tel',
        placeholder: 'Enter Phone'
    },
    {
        class: 'fields',
        name: 'Password',
        type: 'password',
        placeholder: 'Enter Password'
    },
    {
        class: 'fields',
        name: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm Password'
    },
    ],
    selects: [{
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: 'Female'
    },
    {
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: 'Male'
    }
    ],
    data: [{
        class: 'data',
        type: 'date',
        name: 'depart'
    },],
    buttons: [{
        class: 'buttons',
        name: 'submit',
        type: 'submit',
        value: 'Submit'
    }
    ]
};

const formGenerator = new FormGenerator(config);
const formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
const form = formGeneratorOneStep.generateForm();


document.body.appendChild(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormErrorStyle();
    validationRules(form);
});