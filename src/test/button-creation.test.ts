const {ButtonCreation} = require('../form-element-creator/button-creation')

test('create submit button with correct label', () => {
    // given
    const propertiesConfig = {
        buttons: [
            {
                class: 'buttons',
                name: 'submit',
                type: 'submit',
                value: 'Submit'
            }
        ]
    };

    const mockClickHandler = jest.fn();
    const buttonCreation = new ButtonCreation();

    // when
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);
    button.click();

    // then
    expect(button.className).toBe('buttons');    
    expect(button.textContent).toEqual('Submit');
    expect(mockClickHandler).toHaveBeenCalled();
});

test('create previous button with correct label', () => {
    // given
    const propertiesConfig = {
        buttons: [
            {
                class: 'buttons',
                name: 'previous',
                type: 'previous',
                value: 'Previous'
            }
        ]
    };

    const mockClickHandler = jest.fn();
    const buttonCreation = new ButtonCreation();

    // when
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);
    button.click();

    // then
    expect(button.className).toBe('buttons');    
    expect(button.textContent).toEqual('Previous');
    expect(mockClickHandler).toHaveBeenCalled();
});

test('create next button with correct label', () => {
    // given
    const propertiesConfig = {
        buttons: [
            {
                class: 'buttons',
                name: 'next',
                type: 'next',
                value: 'Next'
            }
        ]
    };

    const mockClickHandler = jest.fn();
    const buttonCreation = new ButtonCreation();

    // when
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);
    button.click();

    // then
    expect(button.className).toBe('buttons');    
    expect(button.textContent).toEqual('Next');
    expect(mockClickHandler).toHaveBeenCalled();
});

test('create close button with correct label', () => {
    // given
    const propertiesConfig = {
        buttons: [
            {
                class: 'buttons',
                name: 'close',
                type: 'close',
                value: 'Close'
            }
        ]
    };

    const mockClickHandler = jest.fn();
    const buttonCreation = new ButtonCreation();

    // when
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);
    button.click();

    // then
    expect(button.className).toBe('buttons');    
    expect(button.textContent).toEqual('Close');
    expect(mockClickHandler).toHaveBeenCalled();
});
