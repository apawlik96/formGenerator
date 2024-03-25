import { ElementCreator } from "./form-element-creator/element-creator"; 
const elementCreator = new ElementCreator(); 

export class HtmlTagName { 
    elementCreator = new ElementCreator(); 
    divCreator(): HTMLFormElement { 
        return elementCreator.createElement('div') as HTMLFormElement; 
    }
    buttonCreator(): HTMLFormElement { 
        return elementCreator.createElement('button') as HTMLFormElement;
    } 
    selectCreator(): HTMLFormElement { 
        return elementCreator.createElement('select') as HTMLFormElement;
    }
    inputCreator(): HTMLFormElement { 
        return elementCreator.createElement('input') as HTMLFormElement; 
    }
    optionCreator(): HTMLFormElement { 
        return elementCreator.createElement('option') as HTMLFormElement; 
    } 
    titleCreator(): HTMLFormElement { 
        return elementCreator.createElement('h2') as HTMLFormElement; 
    } 
    formCreator(): HTMLFormElement { 
        return elementCreator.createElement('form') as HTMLFormElement;
    } 
    labelCreator(): HTMLFormElement { 
        return elementCreator.createElement('label') as HTMLFormElement;
    } 
    paragraphCreator(): HTMLFormElement { 
        return elementCreator.createElement('p') as HTMLFormElement;
    } 
}
