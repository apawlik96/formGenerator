const {FormSuccessMessage} = require('../form-element-creator/form-success-message')

test('create div with class name form success message ', () => {
    const formSuccessMessage = new FormSuccessMessage();
    const popupContainer = formSuccessMessage.showSuccessMessage();

    // expect(popupContainer.style.display).toBe('none');
    expect(popupContainer).toBeDefined();
});
