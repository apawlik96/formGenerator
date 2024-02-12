import { FormElementCreationStrategy } from "./form-element-creation-strategy-interface";
import { selectCreator, optionCreator, inputCreator, divCreator } from "./html-tag-name";
require('dotenv').config();

export class FieldElementCreationStrategy implements FormElementCreationStrategy {

    create = async (form: HTMLFormElement, element: any): Promise<void> => {
        if (element.name === 'Phone') {
            await this.createPhoneInput(form, element);
        } else {
            this.createInputFields(form, element);
        }
    }
    
    private createPhoneInput = async (form: HTMLFormElement, element: any) => {
        const divPhone = divCreator;
        divPhone.id = 'divPhone';
        const select = selectCreator;
        if (select) {
            const input = inputCreator;
            this.setInputAttributes(input, element);
            await this.createCountryOptions(select);
            form.appendChild(select);
            form.appendChild(input);
        }
    };
    
    private async createCountryOptions(select: HTMLSelectElement) {
        const countryTelMap = await this.fetchCountryPhoneCodes();
        countryTelMap.forEach((diallingCode: string, countryName: string) => {
            const option = optionCreator;
            option.text = `${countryName}`;
            option.value = `${diallingCode}`;
            select.appendChild(option);
        });
    }

    private createInputFields(form: HTMLFormElement, element: any): void {
        const input = inputCreator;
        this.setInputAttributes(input, element);
        form.appendChild(input);
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
