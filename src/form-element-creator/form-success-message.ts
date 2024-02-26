import { DivCreatorWithClassName } from "./div-creator";
import { ButtonCreation } from "./button-creation";
import { paragraphCreator } from "../html-tag-name";
import { classNames } from "../config/class-name";
import { config } from "../config/config-attributes";

export class FormSuccessMessage {

    showSuccessMessage = (): void => {
        const popupContainer = new DivCreatorWithClassName().createDiv(classNames.popupContainer);

        const successMessage = paragraphCreator;
        successMessage.className = classNames.successMessageParagraph;
        successMessage.textContent = config.popup.textContent;

        popupContainer.appendChild(successMessage)

        const closeButtonConfig = config.buttons.find((button: any) => button.name === 'close');
        if (closeButtonConfig) {
            const closeButton = new ButtonCreation().create(closeButtonConfig.value, () => {
            popupContainer.style.display = 'none';
            closeButton.className = classNames.buttonContainer;
        });

        popupContainer.appendChild(closeButton);

        return popupContainer;
        }
    }
}
