const { myFunction } = require('./lib');

test('test myFunction', () => {
    const input = `input`;
    const output = -1;
    expect(myFunction(input)).toEqual(output);
});
