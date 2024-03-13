const { FormRequiredFieldsParagraph } = require('../form-element-creator/form-required-fields-paragraph')

test('create paragraph with text content', () => {
    // given
    const propertiesConfig = {
        empty: {
            class: 'empty',
            textContent: 'Fields with * are required'
        }
    };
    const expectedHTML = '<div class="required">Fields with * are required</div>';

    // when
    const paragraph = new FormRequiredFieldsParagraph().createParagraphRequiredFields(propertiesConfig.empty.class);

    // then
    expect(paragraph.outerHTML).toEqual(expectedHTML);
});
