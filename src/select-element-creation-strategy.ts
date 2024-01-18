import { ElementCreator } from "./element-creator";
import { FormElementCreationStrategy } from "./form-element-creation-strategy-interface";
import { InputCreationStrategy } from "./input-creation-strategy";

export class SelectElementCreationStrategy implements FormElementCreationStrategy {
    private elementCreator: ElementCreator;
    private inputCreationStrategy: InputCreationStrategy;

    constructor(elementCreator: ElementCreator, inputCreationStrategy: InputCreationStrategy) {
        this.elementCreator = elementCreator;
        this.inputCreationStrategy = inputCreationStrategy;
    }

    create(form: HTMLFormElement, element: any): void {
        const label = this.elementCreator.createElement('label') as HTMLLabelElement;
        if (label) {
            label.textContent = element.for;
            this.inputCreationStrategy.create(form, element);
            form.appendChild(label);
        }
    }
}
