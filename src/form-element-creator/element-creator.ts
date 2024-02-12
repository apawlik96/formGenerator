export class ElementCreator {
    createElement(tagName: string, attributes?: Record<string, string>): HTMLElement | undefined {
        if (typeof document !== 'undefined') {
            const element = document.createElement(tagName);
            if (attributes) {
                Object.keys(attributes).forEach((key) => {
                element.setAttribute(key, attributes[key]);
            });
        }
        return element;
        } else {
            console.error('The document object not found.')
        }
    }
}
