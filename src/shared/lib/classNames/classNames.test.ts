import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });

    test('with mods', () => {
        expect(classNames('someClass', {mod1: true, mod2: true}, ['class1', 'class2']))
            .toBe('someClass class1 class2 mod1 mod2');
    });

    test('with mods false', () => {
        expect(classNames(
            'someClass',
            {mod1: true, mod2: false},
            ['class1', 'class2']))
            .toBe('someClass class1 class2 mod1');
    });

    test('with mods undefined', () => {
        expect(classNames(
            'someClass',
            {mod1: true, mod2: undefined},
            ['class1', 'class2']))
            .toBe('someClass class1 class2 mod1');
    });
});
