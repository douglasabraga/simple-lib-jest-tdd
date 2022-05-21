const div = require('./calculator-div')

it('should div 10 and 1 and the result must be 10', () => {
    expect(div(10,1)).toBe(10);
});

it('should div 10 and 10 and the result must be 1', () => {
    expect(div(10,10)).toBe(1);
});

it('should div 0 and 5 and the result must be 0', () => {
    expect(div(0, 5)).toBe(0);
});

it('should throw an error if a number divided by zero', () => {
    expect(() => div(10, 0)).toThrow('Impossible division by zero')
});

it('should div -5 and 5 andh the result must be -1', () => {
    expect(div(-5, 5)).toBe(-1)
});

it('should div 5 and -5 and the result must be -1', () => {
    expect(div(5, -5)).toBe(-1)
})

it('should div -5 and -5 and the result must be 1', () => {
    expect(div(-5, -5)).toBe(1)
})

it('should throw an error if you pass something other than number', () => {
    expect(div(10, '2')).toBe(5)
    expect(div('10', 2)).toBe(5)
    expect(div('10', '2')).toBe(5)
    expect(
        () => div('10', '')
    ).toThrow('Validate your input')
    expect(
        () => div('', '10')
    ).toThrow('Validate your input')
    expect(
        () => div('', 10)
    ).toThrow('Validate your input')
    expect(
        () => div(['', 10])
    ).toThrow('Validate your input')
    expect(
        () => div({})
    ).toThrow('Validate your input')
});

