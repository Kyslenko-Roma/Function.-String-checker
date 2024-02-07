function validate(str) {
    if (typeof str !== 'string'
        && str === ''
        && str === null) {
        return false;
    }

    if (str[0] === 'A' && str.length >= 5) {
        console.log(true);
    } else {
        console.log(false);
    }
}

validate('aaaaadsa');