import { ElementCreator } from "./element-creator";
import { FormElementCreationStrategy } from "./form-element-creator";

export class InputCreationStrategy implements FormElementCreationStrategy {
    private elementCreator: ElementCreator;

    constructor(elementCreator: ElementCreator) {
        this.elementCreator = elementCreator;
    }

    create(form: HTMLFormElement, element: any): void {
        const input = this.elementCreator.createElement('input') as HTMLInputElement;
        input.type = element.type;
        input.name = element.name;
        element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
        form.appendChild(input);
    }
}
