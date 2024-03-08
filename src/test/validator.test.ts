import { FormValidator } from '../validator';

test('return true if passwords match', () => {
    const formValidator = new FormValidator();
    document.body.innerHTML = `
        <input name="Password">
        <input name="Confirm Password">
    `;
    expect(formValidator.arePasswordsMatching()).toBe(true);
});
