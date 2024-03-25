const {SelectElementCreationStrategy} = require('../form-element-creator/select-element-creation-strategy')

describe('SelectElementCreationStrategy unit tests', () => {
    it('create select element with correct label', () => {
        // given
        const propertiesConfig = {
            selects: [{
                class: 'selects',
                type: 'radio',
                name: 'gender',
                for: 'Female',
                classNameLabel: 'gender-label'
            }]
        };
        const expectedHTMLInput = '<input type="radio" name="gender">';
        const expectedHTMLLabel = '<label class="gender-label">Female</label>';
        // when
        const elementInput = new SelectElementCreationStrategy().createInput(propertiesConfig.selects[0]);
        const elementLabel = new SelectElementCreationStrategy().createLabel(propertiesConfig.selects[0]);
        // then
        expect(elementLabel.outerHTML).toEqual(expectedHTMLLabel);
        expect(elementInput.outerHTML).toEqual(expectedHTMLInput);
        expect(document.querySelector('.input-data-gender')).toBeDefined();
    });
    it('create select element with correct label', () => {
        // given
        const propertiesConfig = {
            selects: [{
                class: 'selects',
                type: 'radio',
                name: 'gender',
                for: 'Male',
                classNameLabel: 'gender-label'
            }]
        };
        const expectedHTMLInput = '<input type="radio" name="gender">';
        const expectedHTMLLabel = '<label class="gender-label">Male</label>';
        // when
        const elementInput = new SelectElementCreationStrategy().createInput(propertiesConfig.selects[0]);
        const elementLabel = new SelectElementCreationStrategy().createLabel(propertiesConfig.selects[0]);
        // then
        expect(elementLabel.outerHTML).toEqual(expectedHTMLLabel);
        expect(elementInput.outerHTML).toEqual(expectedHTMLInput);
        expect(document.querySelector('.input-data-gender')).toBeDefined();
    });
})
