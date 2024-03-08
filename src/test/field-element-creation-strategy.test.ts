const {FieldElementCreationStrategy} = require('../form-element-creator/field-element-creation-strategy')

test('create input element with attributes', () => {
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Username',
            type: 'text',
            placeholder: 'Username'
        }]
    };

    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);

    const expectedHTML = '<input type="text" name="Username" placeholder="Username">';

    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Username',
            type: 'text',
            placeholder: 'Username'
        }]
    };

    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

    const expectedHTML = '<label>Username</label>';

    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('appends div to form', () => {
    expect(document.querySelector('.input-data-gender')).toBeDefined();
});

test('appends div to form', () => {
    expect(document.querySelector('.input-data-pass')).toBeDefined();
});
