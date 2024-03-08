import { FormElementCreationStrategy } from "../form-element-creator-strategy/form-element-creation-strategy-interface";
import { DivCreatorWithClassName } from "./div-creator";
import { inputCreator, labelCreator } from "../html-tag-name";
import { classNames } from "../config/class-name";

export class SelectElementCreationStrategy implements FormElementCreationStrategy {

    create(form: HTMLFormElement, element: any): void {
        const div = new DivCreatorWithClassName().createDiv(classNames.inputDataGender);
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
