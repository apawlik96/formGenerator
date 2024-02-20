import { DivCreatorWithClassName } from "./div-creator";
import { ButtonCreation } from "./button-creation";
import { paragraphCreator } from "../html-tag-name";
import { FormConfig } from "../config/config-interface";

export class FormSuccessMessage {
    config: FormConfig;

    constructor(config: FormConfig) {
        this.config = config;
    }

    showSuccessMessage = (): void => {
        const popupContainer = new DivCreatorWithClassName().createDiv(this.config.popup[0].classNameContainer);

        const successMessage = paragraphCreator;
        successMessage.className = this.config.popup[0].classNameParagraph;
        successMessage.textContent = this.config.popup[0].textContent;

        popupContainer.appendChild(successMessage)

        const closeButtonConfig = this.config.buttons.find((button: any) => button.name === 'close');
        if (closeButtonConfig) {
            const closeButton = new ButtonCreation().create(closeButtonConfig.value, () => {
            popupContainer.style.display = 'none';
        });

        closeButton.className = closeButtonConfig.className;
        popupContainer.appendChild(closeButton);

        return popupContainer;
        }
    }
}
