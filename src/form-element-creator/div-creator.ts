import { divCreator } from "../html-tag-name";

export class DivCreatorWithClassName {
    createDiv(className: string): any {
        const div = divCreator;
        div.className = className;
        return div;
    }
}
