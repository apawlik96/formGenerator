import { FormElementCreationStrategy } from "./form-element-creator";

export class FormElementCreationContext implements FormElementCreationStrategy {
    private creationStrategy: FormElementCreationStrategy;

    constructor(creationStrategy: FormElementCreationStrategy) {
        this.creationStrategy = creationStrategy;
    }

    setCreationStrategy(creationStrategy: FormElementCreationStrategy): void {
        this.creationStrategy = creationStrategy;
    }

    create(form: HTMLFormElement, element: any): void {
        this.creationStrategy.create(form, element);
    }
}
