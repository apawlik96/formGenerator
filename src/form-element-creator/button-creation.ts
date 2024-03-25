import { HtmlTagName } from "../html-tag-name";
import { config } from "../config/config-attributes";

export class ButtonCreation {
    create(text: string, clickHandler: () => void): HTMLFormElement {
        const button = new HtmlTagName().buttonCreator();
        button.textContent = text;
        button.classList.add(config.buttons[0].class);
        button.addEventListener('click', clickHandler);
        return button;
    }
}
