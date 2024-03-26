function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

if(module.exports != 'undefined' && module.exports) {
    module.exports = {somar, subtrair};
}