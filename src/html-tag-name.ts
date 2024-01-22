import { ElementCreator } from "./element-creator";

const elementCreator = new ElementCreator();

export const buttonCreator = elementCreator.createElement('button') as HTMLButtonElement;
export const divCreator = elementCreator.createElement('div') as HTMLDivElement;
export const selectCreator = elementCreator.createElement('select') as HTMLSelectElement;
export const inputCreator = elementCreator.createElement('input') as HTMLInputElement;
export const optionCreator = elementCreator.createElement('option') as HTMLOptionElement;
export const titleCreator = elementCreator.createElement('h2') as HTMLElement;
export const formCreator = elementCreator.createElement('form') as HTMLFormElement;
export const labelCreator = elementCreator.createElement('label') as HTMLLabelElement;
