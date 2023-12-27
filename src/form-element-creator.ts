import { ElementCreator } from "./element-creator";

export class FormElementCreator {
    private elementCreator: ElementCreator;

    constructor(elementCreator: ElementCreator) {
        this.elementCreator = elementCreator;
    }

    createInput(form: HTMLFormElement, element: any): void {
        const input = this.elementCreator.createElement('input') as HTMLInputElement;
        this.setInputAttributes(input, element);
        if (element.name === 'Phone') {
            const select = this.elementCreator.createElement('select') as HTMLSelectElement;
            this.createOption(select, 'PL', 'Poland (+48)');
            this.createOption(select, 'US', 'United States (+1)');
            form.appendChild(select);
            form.appendChild(input);
        } else {
            form.appendChild(input);
        }
    }

    createOption(select: HTMLSelectElement, optionValue: string, optionText: string): void {
        const option = this.elementCreator.createElement('option') as HTMLOptionElement;
        option.value = optionValue;
        option.text = optionText;
        select.appendChild(option);
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

    createButton(text: string, clickHandler: () => void): HTMLButtonElement {
        const button = this.elementCreator.createElement('button') as HTMLButtonElement;
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
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
