import { ElementCreator } from "./element-creator";
import { FormElementCreationStrategy } from "./form-element-creator";

export class FieldElementCreationStrategy implements FormElementCreationStrategy {
    private elementCreator: ElementCreator;

    constructor(elementCreator: ElementCreator) {
        this.elementCreator = elementCreator;
    }

    create = async (form: HTMLFormElement, element: any): Promise<void> => {
        if (element.name === 'Phone') {
            await this.createPhoneInput(form, element);
        } else {
            this.createInputFields(form, element);
        }
    }

    private createPhoneInput = async (form: HTMLFormElement, element: any) => {
        const paragraph = this.elementCreator.createElement('div');
        paragraph.textContent = element.name;
        form.appendChild(paragraph);
        const select = this.elementCreator.createElement('select');
        const input = this.elementCreator.createElement('input') as HTMLInputElement;
        this.setInputAttributes(input, element);

        const countryTelMap = await this.fetchCountryPhoneCodes();

        countryTelMap.forEach((diallingCode: string, countryName: string) => {
            const option = this.elementCreator.createElement('option') as HTMLOptionElement;
            option.text = `${countryName}`;
            option.value = `${diallingCode}`;
            select.appendChild(option);
        });

        form.appendChild(select);
        form.appendChild(input);
    };

    private createInputFields(form: HTMLFormElement, element: any): void {
        const paragraph = this.elementCreator.createElement('div') as HTMLDivElement;
        paragraph.textContent = element.name;
        form.appendChild(paragraph);
        const input = this.elementCreator.createElement('input') as HTMLInputElement;
        this.setInputAttributes(input, element);
        form.appendChild(input);
    }

    private setInputAttributes(input: HTMLInputElement, element: any): void {
        input.type = element.type;
        input.name = element.name;
        element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
    }

    private async fetchCountryPhoneCodes(): Promise<Map<string, string>> {
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
}
