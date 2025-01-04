function computeLPSArray(pat) {
    let patLength = pat.length;
    let lps = new Array(patLength).fill(0);
    let len_lps = 0;
    let i = 1;
    while (i < patLength) {
        if (pat[i] === pat[len_lps]) {
            len_lps++;
            lps[i] = len_lps;
            i++;
        } else if (len_lps != 0) {
            len_lps = lps[len_lps - 1];
        } else {
            lps[i] = 0;
            i++;
        }
    }
    return lps;
}

function minChar(s) {
    let n = s.length;
    let rev = [...s].reverse().join('');
    let temp = s + "@" + rev;
    let lps = computeLPSArray(temp);
    return n - lps.at(-1);
}

console.log(minChar("aacecaaaa"));