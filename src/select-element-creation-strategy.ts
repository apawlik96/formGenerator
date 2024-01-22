import { FormElementCreationStrategy } from "./form-element-creation-strategy-interface";
import { InputCreationStrategy } from "./input-creation-strategy";
import { labelCreator } from "./html-tag-name";

export class SelectElementCreationStrategy implements FormElementCreationStrategy {
    private inputCreationStrategy: InputCreationStrategy;

    constructor(inputCreationStrategy: InputCreationStrategy) {
        this.inputCreationStrategy = inputCreationStrategy;
    }

    create(form: HTMLFormElement, element: any): void {
        const label = labelCreator;
        label.textContent = element.for;
        this.inputCreationStrategy.create(form, element);
        form.appendChild(label);
    }
}
