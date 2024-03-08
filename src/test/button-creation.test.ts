const {ButtonCreation} = require('../form-element-creator/button-creation')

test('create submit button ', () => {
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
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);

    button.click();

    expect(button.textContent).toEqual('Submit');
    expect(mockClickHandler).toHaveBeenCalled();

});


test('create previous button ', () => {
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
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);

    button.click();

    expect(button.textContent).toEqual('Previous');
    expect(mockClickHandler).toHaveBeenCalled();
});


test('create next button ', () => {
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
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);

    button.click();

    expect(button.textContent).toEqual('Next');
    expect(mockClickHandler).toHaveBeenCalled();
});


test('create close button ', () => {
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
    const button = buttonCreation.create(propertiesConfig.buttons[0].value, mockClickHandler);

    button.click();

    expect(button.textContent).toEqual('Close');
    expect(mockClickHandler).toHaveBeenCalled();
});
