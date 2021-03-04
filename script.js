let result = document.querySelector('#result');

let simbols = document.querySelector('#simbols');
let numbers = document.querySelector('#numbers');
let lower = document.querySelector('#lower');
let upper = document.querySelector('#upper');

let eightChar = document.querySelector('#eight');
let sixChar = document.querySelector('#sixteen');
let thirChar = document.querySelector('#thirtyTwo');


let boxes = [... document.querySelectorAll('.change')];

let btn = document.getElementById('generator');
let clipb = document.querySelector('#clipboard');
let copied = document.querySelector('#copied');


let simb = '!$%&/()=?¿@^*Ç¨´_-';
let nums = '0123456789';
let low = 'qwertyuiopasdfghjklñzxcvbnm';
let up = 'QWERTYUIOPASDFGHJKLÑZXCVBNM';


function generatePassword() {
    let password = '';
    let key = [];

    if (simbols.checked) {
        password += simb;
    }

    if (numbers.checked) {
        password += nums;
    }
    if (lower.checked) {
        password += low;
    } 
    if (upper.checked) {
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
        copied.style.visibility = 'hidden';
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
        copied.style.visibility = 'visible';
    });


    boxes.forEach(box => {
        box.addEventListener('click', () => {
            copied.style.visibility = 'hidden';
        })
    })
}


btn.addEventListener('click', generatePassword);

