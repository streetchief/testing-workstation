/**
 * Red, Green, Refactor
 * Jest API: https://jestjs.io/docs/api
 */
const { myFunction } = require('./lib');

describe('my function', () => {
    test('does a thing and returns 0', () => {
        const input = `input`;
        const expected = 0;
        const output = myFunction(input);
        expect(output).toEqual(expected);
    });
});
