const { ElementCreator } = require('../form-element-creator/element-creator')

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('div').tagName).toBe('DIV');
});

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('button').tagName).toBe('BUTTON');
});

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('select').tagName).toBe('SELECT');
});

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('input').tagName).toBe('INPUT');
});

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('h2').tagName).toBe('H2');
});

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('form').tagName).toBe('FORM');
});

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('label').tagName).toBe('LABEL');
});

test('create html element', () => {
    // given
    const element = new ElementCreator();

    // when then
    expect(element.createElement('p').tagName).toBe('P');
});
