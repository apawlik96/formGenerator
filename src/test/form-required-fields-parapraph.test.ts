const { FormRequiredFieldsParagraph } = require('../form-element-creator/form-required-fields-parapraph')

test('create paragraph with text content', () => {
    // given
    const propertiesConfig = {
        empty: {
            class: 'empty',
            textContent: 'Fields with * are required'
        }
    };

    // when
    const paragraph = new FormRequiredFieldsParagraph().createParagraphRequiredFields(propertiesConfig.empty.class);

    const expectedHTML = '<div class="required">Fields with * are required</div>';

    // then
    expect(paragraph.outerHTML).toEqual(expectedHTML);
});
