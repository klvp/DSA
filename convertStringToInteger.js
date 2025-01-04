let arrs = [" 123", " -134", "-0012gfg23", " 1231231231311133", "-999999999999", "142-"]

function parsetoInt(arr) {
    let result = 0;
    let sign = 1;
    let started = false;
    for (let char of arr) {
        if (char === "-" && !started) {
            sign = -1;
            started = true;
        } else if (char === "+" && !started) {
            started = true;
        } else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
            result = result * 10 + (char.charCodeAt(0) - "0".charCodeAt(0));
            started = true;
        } else if (char.charCodeAt(0) === 32 && !started) {
            continue;
        } else {
            break;
        }
    }
    result *= sign;
    if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (result < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    } else if (result === -0) {
        return 0
    } else {
        return result;
    }
}

for (let arr of arrs) {
    console.log(parsetoInt(arr))
}