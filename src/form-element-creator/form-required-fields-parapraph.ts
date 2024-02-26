import { DivCreatorWithClassName } from "./div-creator";
import { classNames } from "../config/class-name";
import { config } from "../config/config-attributes";

export class FormRequiredFieldsParagraph {

    createParagraphRequiredFields = (): HTMLDivElement => {
        const paragraph = new DivCreatorWithClassName().createDiv(classNames.empty);
        paragraph.textContent = config.empty.textContent;
        return paragraph;
    }
}
