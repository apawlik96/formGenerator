import { DivCreatorWithClassName } from "./div-creator";
import { FormConfig } from "../config/config-interface";

export class FormRequiredFieldsParagraph {
    config: FormConfig;

    constructor(config: FormConfig) {
        this.config = config;
    }

    createParagraphRequiredFields = (): HTMLDivElement => {
        const paragraph = new DivCreatorWithClassName().createDiv(this.config.empty[0].className);
        paragraph.textContent = this.config.empty[0].textContent;
        return paragraph;
    }
}
