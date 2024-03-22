import { inputCreator } from '../html-tag-name';
import { FormValidator } from '../validator';

describe('FormValidator', () => {
    // given
    const formValidator = new FormValidator();

    describe('Email validation', () => {
        test.each([
            ['valid_email@example.com', true],
            ['invalid_email@.com', false],
            ['another_invalid_email@', false]
        ])('check validation %s and return %p', (email, expected) => {

            // when
            const result = formValidator.isEmailValid(email);

            // then
            expect(result).toBe(expected);
        });
    })

    describe('Phone number validation', () => {
        it('return true if phone number is valid', () => {
            // given
            const formValidator = new FormValidator();
            document.body.innerHTML = `
        <input name="Phone" value="+48123456789">
    `;
            // when 
            const passwordsMatch = formValidator.validationNumber();
            // then
            expect(passwordsMatch).toBeTruthy();
        });

        it('return true if phone number is valid', () => {
            // given
            const formValidator = new FormValidator();
            document.body.innerHTML = `
        <input name="Phone" value="abc123456789">
    `;
            // when 
            const passwordsMatch = formValidator.validationNumber();
            // then
            expect(passwordsMatch).toBe(false);
        });
    })

    describe('Password strength validation', () => {
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
    })

    describe('Password matching', () => {
        it('return true if passwords match', () => {
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

        it('return true if passwords match', () => {
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
    })

    describe('Error paragraph', () => {
        it('create error paragraph', () => {
            // given
            const validationError = 'Invalid email address.';
            const inputElement = inputCreator;
            inputElement.name = 'Email';
            // when
            const errorParagraph = formValidator.createErrorParagraph(validationError, inputElement);
        
            // then
            expect(errorParagraph).toBeTruthy();
        });
        it('clear existing error paragraph', () => {
            const inputElement = inputCreator;
            inputElement.name = 'Email';
            formValidator.clearExistingError(inputElement);
            const usernameErrorParagraph = document.getElementById('email-error');
            expect(usernameErrorParagraph).toBeNull();
        });
    })

    describe('validateForm', () => {
        it('return true if a form is valid', () => {
            const inputElements = document.querySelectorAll('input');
    
            const isValidMock = jest.fn().mockReturnValue(true);
        
            const result = new FormValidator().validateForm(inputElements);
        
            expect(result).toBe(true);
            expect(isValidMock).toHaveBeenCalledTimes(inputElements.length);
        });
    })
});
