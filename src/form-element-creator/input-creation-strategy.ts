import { FormElementCreationStrategy } from "../form-element-creator-strategy/form-element-creation-strategy-interface";
import { inputCreator } from "../html-tag-name";

export class InputCreationStrategy implements FormElementCreationStrategy {
    create(form: HTMLFormElement, element: any): void {
        const input = inputCreator;
        input.type = element.type;
        input.name = element.name;
        element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
        form.appendChild(input);
    }
}
