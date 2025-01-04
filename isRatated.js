let txt = "abcd", pat = "acbd"

function isRotated(txt, pat) {
    let concat = txt + txt
    if (concat.includes(pat)) return true
    return false
}
console.log(isRotated(txt, pat))