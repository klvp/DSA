// Filled Triangle
//     *    
//    ***   
//   *****  
//  *******
// *********
function print1(n) {
    let pattern = ""
    for (let i = 0; i < n; i++) {
        // space
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " "
        }
        // star
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += "*"
        }
        // pattern
        for (let j = 0; j < n - i - 1; j++) {
            pattern += " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// filled inverted Triangle
// *********
//  ******* 
//   *****  
//    ***   
//     *
function print2(n) {
    let pattern = ""
    for (let i = 0; i < n; i++) {
        // space
        for (let j = 0; j < i; j++) {
            pattern += " "
        }
        // star
        for (let j = 0; j < 2 * (n - i) - 1; j++) {
            pattern += "*"
        }
        // pattern
        for (let j = 0; j < i; j++) {
            pattern += " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// symmetric pattern
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
function print3(n) {
    pattern = ""
    for (let i = 1; i <= 2 * n - 1; i++) {
        let stars = i < 6 ? i : 2 * n - i
        for (let j = 0; j < stars; j++) {
            pattern += "*"
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// right angle triangle with 0 and 1
// 1
// 01
// 101
// 0101
// 10101
function print4(n) {
    pattern = ""
    let start = 1
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) start = 1
        else start = 0
        for (let j = 0; j <= i; j++) {
            pattern += start
            start = 1 - start
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321
function print5(n) {
    let pattern = ""
    for (let i = 1; i <= n; i++) {
        // numbers
        for (let j = 1; j <= i; j++) {
            pattern += j
        }
        // space
        for (let j = 1; j <= 2 * (n - i); j++) {
            pattern += " "
        }
        // numbers
        for (let j = i; j > 0; j--) {
            pattern += j
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15
function print6(n) {
    let start = 1
    pattern = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            pattern += start++ + " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// A
// AB
// ABC
// ABCD
// ABCDE
function print7(n) {
    let pattern = ""
    for (let i = 0; i < n; i++) {
        let start = "A".charCodeAt()
        for (let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(start++)
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// ABCDE
// ABCD
// ABC
// AB
// A
function print8(n) {
    let pattern = ""
    for (let i = 0; i < n; i++) {
        let start = "A".charCodeAt()
        for (let j = 0; j < n - i; j++) {
            pattern += String.fromCharCode(start++)
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// A
// BB
// CCC
// DDDD
// EEEEE
function print9(n) {
    let pattern = ""
    let start = ""
    for (let i = 0; i < n; i++) {
        start = "A".charCodeAt() + i
        for (let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(start)
        }
        pattern += "\n"
    }
    console.log(pattern)
}
//     A    
//    ABA   
//   ABCBA  
//  ABCDCBA 
// ABCDEDCBA
function print10(n) {
    let pattern = ""
    let start = ""
    for (let i = 0; i < n; i++) {
        start = "A".charCodeAt()
        // space
        for (let j = 0; j < n - 1 - i; j++) {
            pattern += " "
        }
        // alphabets
        let breakpoint = Math.floor((2 * i + 1) / 2)
        for (let j = 0; j < 2 * i + 1; j++) {
            pattern += String.fromCharCode(start)
            if (j < breakpoint) {
                start++
            }
            else {
                start--
            }
        }
        // space
        for (let j = 0; j < n - 1 - i; j++) {
            pattern += " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// E 
// D E 
// C D E 
// B C D E 
// A B C D E
function print11(n) {
    let pattern = ""
    let start = ""
    for (let i = 1; i <= n; i++) {
        start = "A".charCodeAt() + n - i
        for (let j = 1; j <= i; j++) {
            pattern += String.fromCharCode(start++) + " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
function print12(n) {
    let pattern = ""
    for (let i = 0; i < n; i++) {
        // stars
        for (let j = 0; j < n - i; j++) {
            pattern += "*"
        }
        // spaces
        for (let j = 0; j < 2 * i; j++) {
            pattern += " "
        }
        // stars
        for (let j = 0; j < n - i; j++) {
            pattern += "*"
        }
        pattern += "\n"
    }
    for (let i = 0; i < n; i++) {
        // stars
        for (let j = 0; j < i + 1; j++) {
            pattern += "*"
        }
        // spaces
        for (let j = 0; j < 2 * (n - 1 - i); j++) {
            pattern += " "
        }
        // stars
        for (let j = 0; j < i + 1; j++) {
            pattern += "*"
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// function print13(n) {
//     let pattern = ""
//     for (let i = 1; i <= n; i++) {
//         // stars
//         for (let j = 0; j < i; j++) {
//             pattern += "*"
//         }
//         // spaces
//         for (let j = 0; j < 2 * (n - i); j++) {
//             pattern += " "
//         }
//         // stars
//         for (let j = 0; j < i; j++) {
//             pattern += "*"
//         }
//         pattern += "\n"
//     }
//     for (let i = 0; i < n - 1; i++) {
//         // stars
//         for (let j = 0; j < n - 1 - i; j++) {
//             pattern += "*"
//         }
//         // spaces
//         for (let j = 0; j < 2 * (i + 1); j++) {
//             pattern += " "
//         }
//         // stars
//         for (let j = 0; j < n - 1 - i; j++) {
//             pattern += "*"
//         }
//         pattern += "\n"
//     }
//     console.log(pattern)

// }
function print13(n) {
    let pattern = ""
    let stars = null
    let spaces = 2 * (n - 1)
    for (let i = 1; i <= 2 * n - 1; i++) {
        if (i <= n) stars = i
        else stars = 2 * n - i
        // stars
        for (let j = 0; j < stars; j++) {
            pattern += "*"
        }
        // spaces
        for (let j = 0; j < spaces; j++) {
            pattern += " "
        }
        // stars
        for (let j = 0; j < stars; j++) {
            pattern += "*"
        }
        pattern += "\n"
        if (i < n) spaces -= 2
        else spaces += 2
    }
    console.log(pattern)
}
// *****
// *   *
// *   *
// *   *
// *****
function print14(n) {
    let pattern = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
                pattern += "*"
            }
            else pattern += " "
        }
        pattern += "\n"
    }
    console.log(pattern)
}
// for pattern 15 first we create below matrix and convert each element to (n-value)
// 0000000
// 0111110
// 0122210
// 0123210
// 0122210
// 0111110
// 0000000
// In above matrix each element value is the min distance from top, bottom,left and right
// if we alter the each element by (n-value) operation then it will convert into out required value

// below is the required pattern
// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444
function print15(n) {
    let pattern = ""
    for (let i = 0; i < 2 * n - 1; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            let top = i
            let left = j
            let right = 2 * (n - 1) - j
            let bottom = 2 * (n - 1) - i
            pattern += n - Math.min(top, left, bottom, right)
        }
        pattern += "\n"
    }
    console.log(pattern)
}
print15(4)
