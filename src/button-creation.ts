import { ElementCreator } from "./element-creator";

export class ButtonCreation {
    private elementCreator: ElementCreator;

    constructor(elementCreator: ElementCreator) {
        this.elementCreator = elementCreator;
    }

    create(text: string, clickHandler: () => void): HTMLButtonElement {
        const button = this.elementCreator.createElement('button') as HTMLButtonElement;
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    }
}
