const { FormSuccessMessage } = require('../form-element-creator/form-success-message')

describe('FormSuccessMessage', () => {
    it('create div with class name form success message ', () => {
        // given
        const formSuccessMessage = new FormSuccessMessage();
        // when
        const popupContainer = formSuccessMessage.showSuccessMessage();
        // then
        expect(popupContainer).toBeDefined();
    })
});
