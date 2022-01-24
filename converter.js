function converter (a = 1, b = 4.4)  {
    if (a == 0 || b == 0) {
        return 'Żaden z parametrów nie może być równy 0'
    }
    return a * b;
}
module.exports = converter;