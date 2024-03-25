const { ElementCreator } = require('../form-element-creator/element-creator')

describe('ElementCreator', () => {
    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('div').tagName).toBe('DIV');
    });

    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('button').tagName).toBe('BUTTON');
    });

    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('select').tagName).toBe('SELECT');
    });

    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('input').tagName).toBe('INPUT');
    });

    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('h2').tagName).toBe('H2');
    });

    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('form').tagName).toBe('FORM');
    });

    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('label').tagName).toBe('LABEL');
    });

    it('create html element', () => {
        // given
        const element = new ElementCreator();

        // when then
        expect(element.createElement('p').tagName).toBe('P');
    })
});
