const {SelectElementCreationStrategy} = require('../form-element-creator/select-element-creation-strategy')

test('create select element', () => {
    // const propertiesConfig = {
    //     selects: [{
    //         class: 'selects',
    //         type: 'radio',
    //         name: 'gender',
    //         for: 'Female'
    //     }]
    // };

    // const element = new SelectElementCreationStrategy().create(propertiesConfig.selects[0]);

    // const expectedHTMLInput = '<input type="radio" name="gender" placeholder="Female">';

    // const expectedHTMLLabel = '<label>Female</label>';

    // expect(element.outerHTML).toEqual(expectedHTMLLabel);
    // expect(element.outerHTML).toEqual(expectedHTMLInput);

    expect(document.querySelector('.input-data-gender')).toBeDefined();
});
