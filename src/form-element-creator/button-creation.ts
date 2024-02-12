import { buttonCreator } from "../html-tag-name";

export class ButtonCreation {
    create(text: string, clickHandler: () => void): HTMLButtonElement {
        const button = buttonCreator;
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    }
}
