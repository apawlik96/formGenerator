const { ElementCreator } = require('../form-element-creator/element-creator')

test('create html element', () => {
    expect(new ElementCreator().createElement('div').tagName).toBe('DIV');
});

test('create html element', () => {
    expect(new ElementCreator().createElement('button').tagName).toBe('BUTTON');
});

test('create html element', () => {
    expect(new ElementCreator().createElement('select').tagName).toBe('SELECT');
});

test('create html element', () => {
    expect(new ElementCreator().createElement('input').tagName).toBe('INPUT');
});

test('create html element', () => {
    expect(new ElementCreator().createElement('h2').tagName).toBe('H2');
});

test('create html element', () => {
    expect(new ElementCreator().createElement('form').tagName).toBe('FORM');
});

test('create html element', () => {
    expect(new ElementCreator().createElement('label').tagName).toBe('LABEL');
});

test('create html element', () => {
    expect(new ElementCreator().createElement('p').tagName).toBe('P');
});
