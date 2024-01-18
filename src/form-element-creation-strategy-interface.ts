export interface FormElementCreationStrategy {
    create(form: HTMLFormElement, element: any): void;
}