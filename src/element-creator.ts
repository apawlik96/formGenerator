export class ElementCreator {
    createElement(tagName: string, attributes?: Record<string, string>): HTMLElement {
        const element = document.createElement(tagName);

        if (attributes) {
            Object.keys(attributes).forEach((key) => {
                element.setAttribute(key, attributes[key]);
            });
        }
        return element;
    }
}