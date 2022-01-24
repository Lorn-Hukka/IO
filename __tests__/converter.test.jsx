const converter = require('../converter')

test('mnoży 300 * 4.3 aby było równe 1290', () => {
    expect(converter(300, 4.3)).toBe(1290);
})

test('podaje NaN po próbie podania stringa jako jednego z parametrów', () => {
    expect(converter(3,'abcd')).toBeNaN();
})
