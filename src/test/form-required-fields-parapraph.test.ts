import { propertiesConfig } from "../config/config-attributes";
const {FormRequiredFieldsParagraph} = require('../form-element-creator/form-required-fields-parapraph')

test('create paragraph with text content', () => {

    const paragraph = new FormRequiredFieldsParagraph().createParagraphRequiredFields(propertiesConfig.empty.class);

    const expectedHTML = '<div class="required">Pola z * są wymagane</div>';

    expect(paragraph.outerHTML).toEqual(expectedHTML);
});
