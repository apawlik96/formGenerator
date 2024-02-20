import { FormElementCreationStrategy } from "../form-element-creator-strategy/form-element-creation-strategy-interface";
import { selectCreator, optionCreator, inputCreator, labelCreator } from "../html-tag-name";
import { DivCreatorWithClassName } from "./div-creator";
require('dotenv').config();

export class FieldElementCreationStrategy implements FormElementCreationStrategy {
    config: any;

    constructor(config: any) {
        this.config = config;
    }

    private createInput(element: any): HTMLInputElement {
        const input = inputCreator;
        input.type = element.type;
        input.name = element.name;
        input.placeholder = element.placeholder;
        return input;
    }

    private createLabel(element: any): HTMLFormElement {
        const label = labelCreator;
        label.textContent = element.placeholder;
        return label;
    }

    private createInputFields(form: HTMLFormElement, element: any): HTMLDivElement  {
        const divInputData = new DivCreatorWithClassName().createDiv(element.className);
        const input = this.createInput(element);
        const label = this.createLabel(element);
        divInputData.appendChild(input);
        divInputData.appendChild(label);
        form.appendChild(divInputData);
        return divInputData;
    }

    private createPasswordInput(form: HTMLFormElement, element: any): void {
        const divInputDataPass = new DivCreatorWithClassName().createDiv('input-data-pass');
        const divInputData = new DivCreatorWithClassName().createDiv(element.className);
        const input = this.createInput(element);
        divInputData.appendChild(input);
        const paragraph = this.createLabel(element);
        divInputData.appendChild(paragraph);

        const showPass = new DivCreatorWithClassName().createDiv(this.config.password[0].className);

        const inputShowPass = inputCreator;
        inputShowPass.type = this.config.password[0].type;
        showPass.appendChild(inputShowPass);

        const label = labelCreator;
        label.textContent = this.config.password[0].textContent;
        label.for = this.config.password[0].for;

        showPass.appendChild(label);
        divInputDataPass.appendChild(divInputData);
        divInputDataPass.appendChild(showPass);

        inputShowPass.addEventListener('change', () => {
            input.type = inputShowPass.checked ? 'text' : 'password';
        });

        form.appendChild(divInputDataPass);
    }

    private async createPhoneInput(form: HTMLFormElement, element: any): Promise<void> {
        const divInputDataPhone  = new DivCreatorWithClassName().createDiv('input-data-phone');
        const inputGroupPhone = new DivCreatorWithClassName().createDiv('input-group');

        const select = selectCreator;
        select.id = 'phoneCountryCodeSelect';

        const optionTitle = optionCreator;
        optionTitle.text = this.config.fields.find((field: any) => field.name === 'Phone').diallingCode;
        optionTitle.value = '';
        optionTitle.disabled = true;
        optionTitle.selected = true;
        select.appendChild(optionTitle);

        await this.createCountryOptions(select);
        inputGroupPhone.appendChild(select);

        const divInputData = this.createInputFields(form, element);

        inputGroupPhone.appendChild(divInputData);
        divInputDataPhone.appendChild(inputGroupPhone);
        select.addEventListener('change', () => {
            const selectedOption = select.options[select.selectedIndex];
            const inputField = divInputData.querySelector('input') as HTMLInputElement;
            if (inputField) {
                inputField.value = selectedOption.value;
            }
        });
        form.appendChild(divInputDataPhone);
    }

    private async createCountryOptions(select: HTMLSelectElement) {
        const countryTelMap = await this.fetchCountryPhoneCodes();
        countryTelMap.forEach((diallingCode: string, countryName: string) => {
            const option = optionCreator;
            option.text = `${countryName}`;
            option.value = `${diallingCode}`;
            select.appendChild(option);
        });
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

    create = async (form: HTMLFormElement, element: any): Promise<void> => {
        switch (element.name) {
            case 'Phone':
                await this.createPhoneInput(form, element);
                break;
            case 'Password':
                this.createPasswordInput(form, element);
                break;
            default:
                this.createInputFields(form, element);
                return;
        }
    }
}
