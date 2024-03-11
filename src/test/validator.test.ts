import { FormValidator } from '../validator';

describe('FormValidator', () => {
    // given
    const formValidator = new FormValidator();

    test.each([
        ['valid_email@example.com', true],
        ['invalid_email@.com', false],
        ['another_invalid_email@', false]
    ])('check validation %s and return %p', (email, expected) => {

        // given
        const result = formValidator.isEmailValid(email);

        // then
        expect(result).toBe(expected);
    });
});

describe('FormValidator', () => {
    // given
    const formValidator = new FormValidator();

    test.each([
        ['e8dm3XN.NG', ""],
        ['e8dm3XNdNG', "1 special character"],
        ['DeSbfK.qQG', "1 digit"]
    ])('check validation %s and return %p', (password, expected) => {

        // when
        const result = formValidator.isStrongPassword(password);

        // then
        expect(result).toBe(expected);
    });
});

test('return true if passwords match', () => {
    // given
    const formValidator = new FormValidator();
    document.body.innerHTML = `
        <input name="Password" value="e8dm3XN.NG">
        <input name="Confirm Password" value="e8dm3XN.NG">
    `;

    // when 
    const passwordsMatch = formValidator.arePasswordsMatching();

    // then
    expect(passwordsMatch).toBe(true);
});


test('return true if passwords match', () => {
    // given
    const formValidator = new FormValidator();
    document.body.innerHTML = `
        <input name="Password" value="e8dm3XN.NG">
        <input name="Confirm Password" value="e8dm3XN.">
    `;

    // when 
    const passwordsMatch = formValidator.arePasswordsMatching();

    // then
    expect(passwordsMatch).toBe(false);
});