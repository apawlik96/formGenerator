const { FieldElementCreationStrategy } = require('../form-element-creator/field-element-creation-strategy')
import { HtmlTagName } from "../html-tag-name";
require('jest-fetch-mock').enableMocks();

describe('FieldElementCreationStrategy', () => {
    describe('create input element with attributes', () => {
        it('create input Username', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Username',
                    type: 'text',
                    placeholder: 'Username'
                }]
            };
            const expectedHTML = '<input type="text" name="Username" placeholder="Username">';
            // when
            const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
            // then
            expect(inputElement.outerHTML).toEqual(expectedHTML);
        });

        it('create input First Name', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'First Name',
                    type: 'text',
                    placeholder: 'First Name'
                }]
            };
            const expectedHTML = '<input type="text" name="First Name" placeholder="First Name">';
            // when
            const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);
            // then
            expect(inputElement.outerHTML).toEqual(expectedHTML);
        });

        it('create input Last Name', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Last Name',
                    type: 'text',
                    placeholder: 'Last Name'
                }]
            };
            const expectedHTML = '<input type="text" name="Last Name" placeholder="Last Name">';

            // when
            const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);

            // then
            expect(inputElement.outerHTML).toEqual(expectedHTML);
        });

        it('create input Email', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Email',
                    type: 'text',
                    placeholder: 'Email*'
                }]
            };
            const expectedHTML = '<input type="text" name="Email" placeholder="Email*">';

            // when
            const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);

            // then
            expect(inputElement.outerHTML).toEqual(expectedHTML);
        });

        it('create input Phone', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Phone',
                    type: 'text',
                    placeholder: 'Phone*'
                }]
            };
            const expectedHTML = '<input type="text" name="Phone" placeholder="Phone*">';

            // when
            const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);

            // then
            expect(inputElement.outerHTML).toEqual(expectedHTML);
        });

        it('create input Password', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Password',
                    type: 'text',
                    placeholder: 'Password*'
                }]
            };
            const expectedHTML = '<input type="text" name="Password" placeholder="Password*">';

            // when
            const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);

            // then
            expect(inputElement.outerHTML).toEqual(expectedHTML);
        });

        it('create input Confirm Password', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Confirm Password',
                    type: 'text',
                    placeholder: 'Confirm Password*'
                }]
            };
            const expectedHTML = '<input type="text" name="Confirm Password" placeholder="Confirm Password*">';

            // when
            const inputElement = new FieldElementCreationStrategy().createInput(propertiesConfig.fields[0]);

            // then
            expect(inputElement.outerHTML).toEqual(expectedHTML);
        })
    });

    describe('create input element with attributes', () => {
        it('create label Username', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Username',
                    type: 'text',
                    placeholder: 'Username'
                }]
            };
            const expectedHTML = '<label>Username</label>';

            // when
            const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

            // then
            expect(labelElement.outerHTML).toEqual(expectedHTML);
        });

        it('create label First Name', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'First Name',
                    type: 'text',
                    placeholder: 'First Name'
                }]
            };
            const expectedHTML = '<label>First Name</label>';

            // when
            const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

            // then
            expect(labelElement.outerHTML).toEqual(expectedHTML);
        });

        it('create label Last Name', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Last Name',
                    type: 'text',
                    placeholder: 'Last Name'
                }]
            };
            const expectedHTML = '<label>Last Name</label>';

            // when
            const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

            // then
            expect(labelElement.outerHTML).toEqual(expectedHTML);
        });

        it('create label Email', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Email',
                    type: 'text',
                    placeholder: 'Email'
                }]
            };
            const expectedHTML = '<label>Email</label>';

            // when
            const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

            // then
            expect(labelElement.outerHTML).toEqual(expectedHTML);
        });

        it('create label Phone', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Phone',
                    type: 'text',
                    placeholder: 'Phone'
                }]
            };
            const expectedHTML = '<label>Phone</label>';

            // when
            const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

            // then
            expect(labelElement.outerHTML).toEqual(expectedHTML);
        });

        it('create label Password', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Password',
                    type: 'text',
                    placeholder: 'Password'
                }]
            };
            const expectedHTML = '<label>Password</label>';

            // when
            const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

            // then
            expect(labelElement.outerHTML).toEqual(expectedHTML);
        });

        it('create label Confirm Password', () => {
            // given
            const propertiesConfig = {
                fields: [{
                    class: 'fields',
                    name: 'Confirm Password',
                    type: 'text',
                    placeholder: 'Confirm Password'
                }]
            };
            const expectedHTML = '<label>Confirm Password</label>';

            // when
            const labelElement = new FieldElementCreationStrategy().createLabel(propertiesConfig.fields[0]);

            // then
            expect(labelElement.outerHTML).toEqual(expectedHTML);
        })
    });

    it('appends div to form', () => {
        expect(document.querySelector('.input-data')).toBeDefined();
    });

    it('appends div to form', () => {
        expect(document.querySelector('.input-data-pass')).toBeDefined();
    });

    it('create div show password checkbox with label', () => {
        // given
        const propertiesConfig = {
            fields: [{
                class: 'showPass',
                type: 'checkbox',
                textContent: 'Show password',
                for: 'showPasswordCheckbox'
            }]
        };
        const expectedHTMLLabel = '<div class="showPass"><input type="checkbox" name="showPass" placeholder="Show password"><label>Show password</label></div>';

        // when
        const element = new FieldElementCreationStrategy().createShowPasswordInput(propertiesConfig.fields[0]);

        // then
        expect(element.outerHTML).toEqual(expectedHTMLLabel);
    })

    describe('fetchCountryPhoneCodes', () => {
        global.fetch = jest.fn();

        process.env.API_KEY = 'mockedAPIUrl';

        const mockApiResponse = {
            US: { country_name: 'United States', dialling_code: '+1' },
            GB: { country_name: 'United Kingdom', dialling_code: '+44' }
        };
        beforeEach(() => {
            (fetch as jest.Mock).mockClear();
        });

        it('should fetch country phone codes and return a Map', async () => {
            // given
            (fetch as jest.Mock).mockResolvedValueOnce({
                json: () => Promise.resolve(mockApiResponse)
            });
            const expectedMap = new Map([
                ['United States', '+1'],
                ['United Kingdom', '+44']
            ]);

            // when
            const result = await new FieldElementCreationStrategy().fetchCountryPhoneCodes();

            // then
            expect(result).toEqual(expectedMap);
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(process.env.API_KEY);
        });

        it('create country options in select element', async () => {
            // given
            const select = new HtmlTagName().selectCreator();
            (fetch as jest.Mock).mockResolvedValueOnce({
                json: () => Promise.resolve(mockApiResponse)
            });
            const option = select.children;

            // when
            const fieldElementCreationStrategy = new FieldElementCreationStrategy();
            const createCountryOptions = fieldElementCreationStrategy.createCountryOptions.bind(fieldElementCreationStrategy);
            await createCountryOptions(select);

            // then
            expect(option[0].textContent).toBe('United States');
            expect(option[0].getAttribute('value')).toBe('+1');
            expect(option[1].textContent).toBe('United Kingdom');
            expect(option[1].getAttribute('value')).toBe('+44');
        });
    });


    it('addSelectChangeEvent updates input value on select change', () => {
        // given
        document.body.innerHTML = ` 
            <div class="input-group">
                <select id="phoneCountryCodeSelect">
                    <option value="" disabled="">Dialling Code</option>
                    <option value="+1">United States</option>
                </select>
                <div class="input-data">
                    <input type="tel" name="Phone" placeholder="Phone*">
                    <label>Phone*</label>
                </div>
            </div>`
        ;

        // when
        const selectElement = document.getElementById('phoneCountryCodeSelect') as HTMLSelectElement;
        const divInputData = document.querySelector('.input-group') as HTMLDivElement;
        const inputElement = document.querySelector('.input-data input') as HTMLInputElement;
        const fieldElementCreationStrategy = new FieldElementCreationStrategy();
        fieldElementCreationStrategy.addSelectChangeEvent(selectElement, divInputData);
        selectElement.selectedIndex = 1;
        selectElement.dispatchEvent(new Event('change'));

        // then
        expect(inputElement.value.trim()).toBe('+1');
    })
});
