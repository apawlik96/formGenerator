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
        if (element.name === 'Phone') {
            const select = this.elementCreator.createElement('select') as HTMLSelectElement;
            const optionPL = this.elementCreator.createElement('option') as HTMLOptionElement;
            optionPL.value = 'PL';
            optionPL.text = 'Poland (+48)';
            select.appendChild(optionPL);
            const optionUS = this.elementCreator.createElement('option') as HTMLOptionElement;
            optionUS.value = 'US';
            optionUS.text = 'United States (+1)';
            select.appendChild(optionUS);
            form.appendChild(select);
            form.appendChild(input);
        } else {
            form.appendChild(input);
        }
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
                console.log('field type not recognized', element.class);
        }
    }
}

interface Field {
    class: string;
    name: string;
    type: string;
    placeholder?: string;
    for?: string;
    value?: string;
}


interface FormConfig {
    fields: Array<Field>;
    selects: Array<Field>;
    data: Array<Field>;
    buttons: Array<Field>;
}

interface FormGeneratorImpl {
    config: FormConfig;
}

class FormGenerator implements FormGeneratorImpl {
    config: FormConfig;

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

class FormValidator {

    validation(): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const email = (form.querySelector('[name="Email"]') as HTMLInputElement).value;
        const password = (form.querySelector('[name="Password"]') as HTMLInputElement).value;
        const confirmPassword = (form.querySelector('[name="Confirm Password"]') as HTMLInputElement).value;

        const emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.validationRules(confirmPassword !== password, "Passwords do not match", '[name="Confirm Password"]', '.error-pass');
        this.validationRules(!emailRegex.test(email), "Email is not valid", '[name="Email"]', '.error-email');
        this.validationNumber();
    }

    validationNumber() {
        const phoneNumberOption = (form.querySelector('option') as HTMLOptionElement).text;
        const phone = (form.querySelector('[name="Phone"]') as HTMLInputElement).value;
    
        const cleanedNumber = phone.replace(/\D/g, '');
        const polishRegex = /^(?:\+48|0)?[1-9]\d{8}$/;
        const americanRegex = /^(?:\+1)?[2-9]\d{9}$/;
    
        if(phoneNumberOption === "Poland (+48)") {
            this.validationRules (!polishRegex.test(cleanedNumber), "Invalid phone number", '[name="Phone"]', '.error-phone')
        } else if(phoneNumberOption === "United States (+1)"){
            this.validationRules (!americanRegex.test(cleanedNumber), "Invalid phone number", '[name="Phone"]', '.error-phone')
        }
    }

    validationRules(validationRule: boolean, validationError: string, elementConfigFields: string, className: string): void {
        if (validationRule) {
            this.createValidationElement(validationError, elementConfigFields, className);
        } else {
            this.removeValidationError(className);
        }
    }

    createValidationElement(validationError: string, elementConfigFields: string, className: string): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const errorMsg = form.querySelector(className) as HTMLParagraphElement;

        if (!errorMsg) {
            const errorMsg = document.createElement('p');
            errorMsg.classList.add(className.substring(1));
            errorMsg.textContent = validationError;
            const elementInput = form.querySelector(elementConfigFields) as HTMLElement;
            const elementInputNode = elementInput.parentNode as Node;
            elementInputNode.insertBefore(errorMsg, elementInput.nextSibling);
        }
    }

    removeValidationError(className: string): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const errorMsg = form.querySelector(className) as HTMLParagraphElement;
        if (errorMsg) {
            errorMsg.remove();
        }
    }

}

class FormGeneratorMultiStep {
    config: any;
    currentPageIndex: number;
    formElementCreator: FormElementCreator;

    constructor(config: any) {
        this.config = config;
        this.currentPageIndex = 0;
        this.formElementCreator = new FormElementCreator(new ElementCreator());
    }

    createPage(title: string, fields: string[]): HTMLFormElement {
        const form = document.createElement('form') as HTMLFormElement;
        form.className = 'form-page';
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = title;
        form.appendChild(pageTitle);
    
        fields.forEach((fieldName) => {
            this.formElementCreator.createFormElement(form, config.fields.find((field: any) => field.name === fieldName));
        });
    
        return form;
    }
    

    showPreviousPage(): void {
        if (this.currentPageIndex > 0) {
            (formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex--;
            (formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    showNextPage(): void {
        if (this.currentPageIndex < formPages.length - 1) {
            (formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex++;
            (formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    generateForm(): HTMLElement {
        const container = document.createElement('div');

        formPages.forEach((page, index) => {
            const formPage = this.createPage(page.title, page.fields);
            formPage.style.display = index === 0 ? 'block' : 'none';
            container.appendChild(formPage);
            (formPages[index] as any).element = formPage;
        });

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.addEventListener('click', () => this.showPreviousPage());
        container.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', () => this.showNextPage());
        container.appendChild(nextButton);

        document.body.appendChild(container);

        return container;
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

const formPages = [
    { title: 'Step 1', fields: ['Username', 'First Name', 'Last Name'] },
    { title: 'Step 2', fields: ['Email', 'Phone'] },
    { title: 'Step 3', fields: ['Password', 'Confirm Password'] },
];

const formGenerator = new FormGeneratorMultiStep(config);
const form = formGenerator.generateForm();

// const formGenerator = new FormGenerator(config);
// const formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
// const form = formGeneratorOneStep.generateForm();

const formValidator = new FormValidator();

document.body.appendChild(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormErrorStyle();
    formValidator.validation();
});
