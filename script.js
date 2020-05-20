let result = document.querySelector('#result');

let simbols = document.querySelector('#simbols');
let lower = document.querySelector('#lower');
let upper = document.querySelector('#upper');

let eightChar = document.querySelector('#eight');
let sixChar = document.querySelector('#sixteen');
let thirChar = document.querySelector('#thirtyTwo');


let allBoxes = document.querySelectorAll('.change');
let boxes = [...allBoxes];
let btn = document.querySelector('#app input[type="button"]');
let clipb = document.querySelector('#clipboard');
let copied = document.querySelector('#copied');


let simb = '!$%&/()=?¿@^*Ç¨´_-';
let low = 'qwertyuiopasdfghjklñzxcvbnm';
let up = 'QWERTYUIOPASDFGHJKLÑZXCVBNM';







function generatePassword() {
    let password = '';
    let key = [];

    if (simbols.checked) {
        password += simb;
    }
    if (lower.checked) {
        password += low;
    } if (upper.checked) {
        password += up;
    }

    if (eightChar.checked) {
        for (let i = 0; i < 8; i++) {
            key.push(password[Math.floor(Math.random() * password.length)]);
        }
        password = '';
    }
    if (sixChar.checked) {
        for (let i = 0; i < 16; i++) {
            key.push(password[Math.floor(Math.random() * password.length)]);
        }
        password = '';
    }
    if (thirChar.checked) {
        for (let i = 0; i < 32; i++) {
            key.push(password[Math.floor(Math.random() * password.length)]);
        }
        password = '';
    }

    result.innerHTML = (key.join(''));
    password = key.join('');
    if (password != '') {
        clipb.style.visibility = 'visible';
        copied.style.display = 'none';
    }


    clipb.addEventListener('click', (e) => {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = password;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = { position: 'absolute', left: '-9999px' };
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
        copied.style.display = 'block';
    });

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            copied.style.display = 'none';
        })
    })
}


btn.addEventListener('click', generatePassword);

