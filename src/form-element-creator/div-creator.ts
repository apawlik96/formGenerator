import { HtmlTagName } from "../html-tag-name";

export class DivCreatorWithClassName {
    createDiv(className: string): any {
        const div = new HtmlTagName().divCreator();
        div.className = className;
        return div;
    }
}
