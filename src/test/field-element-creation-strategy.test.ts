const {FieldElementCreationStrategy} = require('../form-element-creator/field-element-creation-strategy')

test('create input element with attributes', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Username',
            type: 'text',
            placeholder: 'Username'
        }]
    };

    // when
    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
    const expectedHTML = '<input type="text" name="Username" placeholder="Username">';

    // then
    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create input element with attributes', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'First Name',
            type: 'text',
            placeholder: 'First Name'
        }]
    };

    // when
    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
    const expectedHTML = '<input type="text" name="First Name" placeholder="First Name">';

    // then
    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create input element with attributes', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Last Name',
            type: 'text',
            placeholder: 'Last Name'
        }]
    };

    // when
    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
    const expectedHTML = '<input type="text" name="Last Name" placeholder="Last Name">';

    // then
    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create input element with attributes', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Email',
            type: 'text',
            placeholder: 'Email*'
        }]
    };

    // when
    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
    const expectedHTML = '<input type="text" name="Email" placeholder="Email*">';

    // then
    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create input element with attributes', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Phone',
            type: 'text',
            placeholder: 'Phone*'
        }]
    };

    // when
    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
    const expectedHTML = '<input type="text" name="Phone" placeholder="Phone*">';

    // then
    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create input element with attributes', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Password',
            type: 'text',
            placeholder: 'Password*'
        }]
    };

    // when
    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
    const expectedHTML = '<input type="text" name="Password" placeholder="Password*">';

    // then
    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create input element with attributes', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Confirm Password',
            type: 'text',
            placeholder: 'Confirm Password*'
        }]
    };

    // when
    const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
    const expectedHTML = '<input type="text" name="Confirm Password" placeholder="Confirm Password*">';

    // then
    expect(inputElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Username',
            type: 'text',
            placeholder: 'Username'
        }]
    };

    // when
    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);
    const expectedHTML = '<label>Username</label>';

    // then
    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'First Name',
            type: 'text',
            placeholder: 'First Name'
        }]
    };

    // when
    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);
    const expectedHTML = '<label>First Name</label>';

    // then
    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Last Name',
            type: 'text',
            placeholder: 'Last Name'
        }]
    };

    // when
    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);
    const expectedHTML = '<label>Last Name</label>';

    // then
    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Email',
            type: 'text',
            placeholder: 'Email'
        }]
    };

    // when
    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);
    const expectedHTML = '<label>Email</label>';

    // then
    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Phone',
            type: 'text',
            placeholder: 'Phone'
        }]
    };

    // when
    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);
    const expectedHTML = '<label>Phone</label>';

    // then
    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Password',
            type: 'text',
            placeholder: 'Password'
        }]
    };

    // when
    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);
    const expectedHTML = '<label>Password</label>';

    // then
    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('create label element with text content', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'fields',
            name: 'Confirm Password',
            type: 'text',
            placeholder: 'Confirm Password'
        }]
    };

    // when
    const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);
    const expectedHTML = '<label>Confirm Password</label>';

    // then
    expect(labelElement.outerHTML).toEqual(expectedHTML);
});

test('appends div to form', () => {
    expect(document.querySelector('.input-data')).toBeDefined();
});

test('appends div to form', () => {
    expect(document.querySelector('.input-data-pass')).toBeDefined();
});

test('create div show password checkbox with label', () => {
    // given
    const propertiesConfig = {
        fields: [{
            class: 'showPass',
            type: 'checkbox',
            textContent: 'Show password',
            for: 'showPasswordCheckbox'
        }]
    };

    // when
    const element = new FieldElementCreationStrategy().createShowPasswordInput(propertiesConfig.fields[0]);
    const expectedHTMLLabel = '<div class="showPass"><input type="checkbox" name="showPass" placeholder="Show password"><label>Show password</label></div>';

    // then
    expect(element.outerHTML).toEqual(expectedHTMLLabel);
})
