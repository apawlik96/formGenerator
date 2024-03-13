const {SelectElementCreationStrategy} = require('../form-element-creator/select-element-creation-strategy')

test('create select element with correct label', () => {
    // given
    const propertiesConfig = {
        selects: [{
            class: 'selects',
            type: 'radio',
            name: 'gender',
            for: 'Female'
        }]
    };
    const expectedHTMLInput = '<input type="radio" name="gender" placeholder="Female">';
    const expectedHTMLLabel = '<label>Female</label>';

    // when
    const element = new SelectElementCreationStrategy().create(propertiesConfig.selects[0]);

    // then
    expect(element.outerHTML).toEqual(expectedHTMLLabel);
    expect(element.outerHTML).toEqual(expectedHTMLInput);

    expect(document.querySelector('.input-data-gender')).toBeDefined();
});

test('create select element with correct label', () => {
    // given
    const propertiesConfig = {
        selects: [{
            class: 'selects',
            type: 'radio',
            name: 'gender',
            for: 'Male'
        }]
    };
    const expectedHTMLInput = '<input type="radio" name="gender" placeholder="Male">';
    const expectedHTMLLabel = '<label>Male</label>';

    // when
    const element = new SelectElementCreationStrategy().create(propertiesConfig.selects[0]);

    // then
    expect(element.outerHTML).toEqual(expectedHTMLLabel);
    expect(element.outerHTML).toEqual(expectedHTMLInput);

    expect(document.querySelector('.input-data-gender')).toBeDefined();
});
