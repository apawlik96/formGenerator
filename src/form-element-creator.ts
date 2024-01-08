import { ElementCreator } from "./element-creator";

export class FormElementCreator {
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

    createButton(text: string, clickHandler: () => void): HTMLButtonElement {
        const button = this.elementCreator.createElement('button') as HTMLButtonElement;
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    }

    createPhoneInput = async (form: HTMLFormElement, element: any) => {
        const paragraph = this.elementCreator.createElement('div');
        paragraph.textContent = element.name;
        form.appendChild(paragraph);
        const select = this.elementCreator.createElement('select');
        const input = this.elementCreator.createElement('input') as HTMLInputElement;
        this.setInputAttributes(input, element);

        const countryTelMap = await this.countryApi();

        countryTelMap.forEach((diallingCode: string, countryName: string) => {
            const option = this.elementCreator.createElement('option') as HTMLOptionElement;
            option.text = `${countryName}`;
            option.value = `${diallingCode}`;
            select.appendChild(option);
        });

        form.appendChild(select);
        form.appendChild(input);
    };

    private async countryApi(): Promise<Map<string, string>> {
        const apiUrl = `http://apilayer.net/api/countries?access_key=c90144e214d92738b0be5d6e0652e1e4&number=14158586273`;
        const data = await fetch(apiUrl);
        const response = await data.json();

        let countryTelMap = new Map<string, string>();

        Object.keys(response).forEach((countryCode) => {
            const countryData = response[countryCode];
            countryTelMap.set(countryData.country_name, countryData.dialling_code);
        });

        return countryTelMap;
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
