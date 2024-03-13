import { buttonCreator } from "../html-tag-name";
import { config } from "../config/config-attributes";

export class ButtonCreation {
    create(text: string, clickHandler: () => void): HTMLButtonElement {
        const button = buttonCreator;
        button.textContent = text;
        button.classList.add(config.buttons[0].class);
        button.addEventListener('click', clickHandler);
        return button;
    }
}
