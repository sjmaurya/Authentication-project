

let homeNavLink = document.getElementById('home-nav-link')
let SignUplink = document.getElementById('sign-up-link')
let loginUplink = document.getElementById('login-link')


let HomePage = document.getElementById('home-page')
let signuppage = document.getElementById('signup-section')
let loginpage = document.getElementById('login-section')
const changeActiveNavLink = (NavLinkClicked) => {
    homeNavLink.classList.remove('active')
    SignUplink.classList.remove('active')
    loginUplink.classList.remove('active')
    HomePage.style.display = 'none';
    signuppage.style.display = 'none';
    loginpage.style.display = 'none';

    switch (NavLinkClicked) {
        case 'Home':
            homeNavLink.classList.add('active');
            HomePage.style.display = 'block';
            break;
        case 'sign-up':
            SignUplink.classList.add('active');
            signuppage.style.display = 'block';
            break;
        case 'login':
            loginUplink.classList.add('active');
            loginpage.style.display = 'block';
            break;
    }
}

let signUpInput = document.getElementById('signuppassword')
let loginInput = document.getElementById('loginpassword')
let signupemail = document.getElementById('signupemail')
let loginemail = document.getElementById('loginemail')
let validalert = document.getElementById('valid-alert')
let invalidalert = document.getElementById('invalid-alert')

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
}

const encode = (inputString) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = inputString.split("")
    let encodedArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex((element) => element === codeArrChar)
        return lookupKeys[index]
        // for (let key in lookup)
        //   if(lookup[key] === codeArrChar)
        //     return key
    })
    return encodedArr.join("")
}

const decode = (encodedStr) => {
    const codeArr = encodedStr.split("")
    let decodedArr = codeArr.map((codeArrChar) => (lookup[codeArrChar]))
    return decodedArr.join("")
}

// const decode = (encodedStr) => encodedStr.split("").map(codeArrChar => lookup[codeArrChar]).join("")
let passwordstoredindb = '';
const signUp = () => {
    passwordstoredindb = encode(signUpInput.value)
    validalert.style.display = "block";
    validalert.innerText = "Password Saved Successfully"
    setTimeout(() => {
        validalert.style.display = 'none';
    }, 2000)
}
const login = () => {
    if (decode(passwordstoredindb) === loginInput.value) {
        validalert.style.display = 'block'
        validalert.innerText = 'Password Matched'
        setTimeout(() => {
            validalert.style.display = 'none';
        }, 2000)
    } else {
        invalidalert.style.display = 'block'
        invalidalert.innerText = 'You need to Remember Your Password Bro!!!'
        setTimeout(() => {
            invalidalert.style.display = 'none';
        }, 2000)
    }
}
