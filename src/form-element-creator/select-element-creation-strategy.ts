import { FormElementCreationStrategy } from "../form-element-creator-strategy/form-element-creation-strategy-interface";
import { DivCreatorWithClassName } from "./div-creator";
import { inputCreator, labelCreator } from "../html-tag-name";

export class SelectElementCreationStrategy implements FormElementCreationStrategy {

    create(form: HTMLFormElement, element: any): void {
        const div = new DivCreatorWithClassName().createDiv(element.className);
        const input = inputCreator;
        input.type = element.type;
        input.name = element.name;
        const label = labelCreator;
        label.textContent = element.for;
        label.className = element.classNameLabel;

        div.appendChild(input);
        div.appendChild(label);
        form.appendChild(div);
    }
}
