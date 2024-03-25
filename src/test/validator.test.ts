import { HtmlTagName } from '../html-tag-name';
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
        test.each([
            ['+12345678', true],
            ['+1', false],
            ['12345678', false]
        ])('check validation %s and return %p', (phoneNumber, expected) => {
            // when
            const result = formValidator.validationNumber(phoneNumber);
            // then
            expect(result).toBe(expected);
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
            const passwordInput = document.createElement('input');
            const confirmPasswordInput = document.createElement('input');

            passwordInput.name = 'Password';
            confirmPasswordInput.name = 'Confirm Password';

            passwordInput.value = 'password123';
            confirmPasswordInput.value = 'password123';
            // when 
            const result = formValidator.arePasswordsMatching();
            // then
            expect(result).toEqual(true);
        });
    })

    describe('Error paragraph', () => {
        it('create error paragraph', () => {
            // given
            const errorParagraph = new HtmlTagName().paragraphCreator();
            errorParagraph.id = 'Email-error'
            errorParagraph.textContent = 'Invalid email address.'

            const inputElement = document.createElement('input');
            inputElement.name = 'Email';
            const inputElementNode = document.createElement('div');
            inputElementNode.appendChild(inputElement);
            document.body.appendChild(inputElementNode);
            inputElementNode.insertBefore(errorParagraph, inputElement.nextSibling);

            // when
            const error = formValidator.createErrorParagraph(errorParagraph.textContent, inputElement);

            // then
            expect(error).toBeTruthy();
        });

        it('clear existing error paragraph', () => {
            // given
            const errorParagraph = new HtmlTagName().paragraphCreator();
            errorParagraph.id = 'Email-error';
            document.body.appendChild(errorParagraph);

            // when
            const removeParagraph = formValidator.removeErrorParagraph(errorParagraph);

            // then
            expect(removeParagraph).toBeUndefined();
        });
    });

    it('validateForm', () => {
        // given
        const inputElements = document.querySelectorAll('input');

        // when
        const result = formValidator.validateForm(inputElements);

        // then
        expect(result).toBe(false);
    });
});
