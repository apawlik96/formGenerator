import { FormElementCreationStrategy } from "../form-element-creator-strategy/form-element-creation-strategy-interface";
import { DivCreatorWithClassName } from "./div-creator";
import { inputCreator, labelCreator } from "../html-tag-name";
import { classNames } from "../config/class-name";

export class SelectElementCreationStrategy implements FormElementCreationStrategy {

    private createInput(element: any): HTMLInputElement {
        const input = inputCreator;
        input.type = element.type;
        input.name = element.name;
        return input;
    }

    private createLabel(element: any): HTMLFormElement {
        const label = labelCreator;
        label.textContent = element.for;
        label.className = classNames.labelGender;
        return label;
    }

    create(form: HTMLFormElement, element: any): HTMLDivElement {
        const div = new DivCreatorWithClassName().createDiv(classNames.inputDataGender);
        const input = this.createInput(element);
        const label = this.createLabel(element);
        div.appendChild(input);
        div.appendChild(label);
        form.appendChild(div);
        return div;
    }
}
