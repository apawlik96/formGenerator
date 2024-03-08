import { FormElementCreationStrategy } from "../form-element-creator-strategy/form-element-creation-strategy-interface";
import { selectCreator, optionCreator, inputCreator, labelCreator } from "../html-tag-name";
import { DivCreatorWithClassName } from "./div-creator";
import { classNames } from "../config/class-name";
import { config } from "../config/config-attributes";
require('dotenv').config();

export class FieldElementCreationStrategy implements FormElementCreationStrategy {

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

    private createInputField(form: HTMLFormElement, element: any): HTMLDivElement  {
        const divInputData = new DivCreatorWithClassName().createDiv(classNames.inputData);
        const input = this.createInput(element);
        const label = this.createLabel(element);
        divInputData.appendChild(input);
        divInputData.appendChild(label);
        form.appendChild(divInputData);
        return divInputData;
    }

    private createPasswordInput(form: HTMLFormElement, element: any): void {
        const divInputDataPass = new DivCreatorWithClassName().createDiv(classNames.inputDataPassword);
        const divInputData = new DivCreatorWithClassName().createDiv(classNames.inputData);
        const input = this.createInput(element);
        divInputData.appendChild(input);
        const paragraph = this.createLabel(element);
        divInputData.appendChild(paragraph);

        const showPass = this.createShowPasswordInput(input);

        divInputDataPass.appendChild(divInputData);
        divInputDataPass.appendChild(showPass);

        form.appendChild(divInputDataPass);
    }

    private createShowPasswordInput(input: any): void {
        const showPass = new DivCreatorWithClassName().createDiv(classNames.showPassword);

        const inputShowPass = inputCreator;
        inputShowPass.type = config.password.type;
        showPass.appendChild(inputShowPass);

        const label = labelCreator;
        label.textContent = config.password.textContent;
        label.for = config.password.for;

        showPass.appendChild(label);

        inputShowPass.addEventListener('change', () => {
            input.type = inputShowPass.checked ? 'text' : 'password';
        });

        return showPass;
    }

    private async createPhoneInput(form: HTMLFormElement, element: any): Promise<void> {
        const divInputDataPhone  = new DivCreatorWithClassName().createDiv(classNames.inputDataPhone);
        const inputGroupPhone = new DivCreatorWithClassName().createDiv(classNames.inputGroup);

        const select = selectCreator;
        select.id = classNames.phoneCountryCodeSelect;

        const optionTitle = optionCreator;
        const diallingCodeParagraph = config.fields.find((field: any) => field.name === 'Phone');
        if (diallingCodeParagraph) {
            optionTitle.text = diallingCodeParagraph.diallingCode;
            optionTitle.value = '';
            optionTitle.disabled = true;
            optionTitle.selected = true;
            select.appendChild(optionTitle);
        }

        await this.createCountryOptions(select);
        inputGroupPhone.appendChild(select);

        const divInputData = this.createInputField(form, element);

        inputGroupPhone.appendChild(divInputData);
        divInputDataPhone.appendChild(inputGroupPhone);

        this.addSelectChangeEvent(select, divInputData);

        form.appendChild(divInputDataPhone);
    }

    private addSelectChangeEvent(select: HTMLSelectElement, divInputData: HTMLDivElement): void {
        select.addEventListener('change', () => {
            const selectedOption = select.options[select.selectedIndex];
            const inputField = divInputData.querySelector('input') as HTMLInputElement;
            if (inputField) {
                inputField.value = selectedOption.value;
            }
        });
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
                this.createInputField(form, element);
                return;
        }
    }
}
