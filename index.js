function validate(str) {
    if (typeof str !== 'string'
        && str === ''
        && str === null) {
        return false;
    }

    if (str[0] === 'A' && str.length >= 5) {
        return true;
    } else {
        return false;
    }
}

console.log(validate('aaaaadsa'));
