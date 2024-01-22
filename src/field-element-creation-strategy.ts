import { ElementCreator } from "./element-creator";
import { FormElementCreationStrategy } from "./form-element-creation-strategy-interface";
require('dotenv').config();

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
        if (paragraph) {
            paragraph.textContent = element.name;
            form.appendChild(paragraph);
            const select = this.elementCreator.createElement('select') as HTMLSelectElement;
            if (select) {
                const input = this.elementCreator.createElement('input') as HTMLInputElement;
                this.setInputAttributes(input, element);
                await this.createCountryOptions(select);
                form.appendChild(select);
                form.appendChild(input);
            }
        }
    };
    
    private async createCountryOptions(select: HTMLSelectElement) {
        const countryTelMap = await this.fetchCountryPhoneCodes();
        countryTelMap.forEach((diallingCode: string, countryName: string) => {
            const option = this.elementCreator.createElement('option') as HTMLOptionElement;
            option.text = `${countryName}`;
            option.value = `${diallingCode}`;
            select.appendChild(option);
        });
    }

    private createInputFields(form: HTMLFormElement, element: any): void {
        const paragraph = this.elementCreator.createElement('div') as HTMLDivElement;
        if (paragraph) {
            paragraph.textContent = element.name;
            form.appendChild(paragraph);
            const input = this.elementCreator.createElement('input') as HTMLInputElement;
            this.setInputAttributes(input, element);
            form.appendChild(input);
        }
    }

    private setInputAttributes(input: HTMLInputElement, element: any): void {
        input.type = element.type;
        input.name = element.name;
        element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
    }

    private async fetchCountryPhoneCodes(): Promise<Map<string, string>> {
        const apiUrl = process.env.API_KEY as string;
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
