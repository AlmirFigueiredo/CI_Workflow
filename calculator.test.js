const {somar, subtrair} = require('./index');

//Testes de Soma
test('soma 10 + 5 igual a 15', () => {
    expect(somar(10, 5)).toBe(15);
});
test('soma -20 + 5 igual a -15', () => {
    expect(somar(-20, 5)).toBe(-15);
});
test('soma 300 + -5 igual a 295', () => {
    expect(somar(300, -5)).toBe(295);
});
test('soma -300 + -200 igual a -500', () => {
    expect(somar(-300, -200)).toBe(-500);
});

//Testes de Subtracao
test('subtracao 10 - 5 igual a 5', () => {
expect(subtrair(10, 5)).toBe(5);
});
test('subtracao -10 - -40 igual a 30', () => {
    expect(subtrair(-10, -40)).toBe(30);
});
test('subtracao -100 - 5 igual a -105', () => {
    expect(subtrair(-100, 5)).toBe(-105);
});
test('subtracao 10 - -5 igual a 15', () => {
    expect(subtrair(10, -5)).toBe(15);
});