const inputMail = document.querySelector('.input-1');
const iconMail = document.querySelector('.icon-mail');

    inputMail.addEventListener('focus',(e)=>{
        inputMail.classList.toggle('active-input');
        iconMail.classList.toggle('active-icon');
    });

    inputMail.addEventListener('blur',(e)=>{
        inputMail.classList.toggle('active-input');
        iconMail.classList.toggle('active-icon');
    });

const inputPass = document.querySelector('.input-2');
const iconPass = document.querySelector('.icon-pass');

    inputPass.addEventListener('focus',(e)=>{
        inputPass.classList.toggle('active-input');
        iconPass.classList.toggle('active-icon');
    });

    inputPass.addEventListener('blur',(e)=>{
        inputPass.classList.toggle('active-input');
        iconPass.classList.toggle('active-icon');
    });

const inputName = document.querySelector('.input-3');

    inputName.addEventListener('focus',(e)=>{
        inputName.classList.toggle('active-input');
    });

    inputName.addEventListener('blur',(e)=>{
        inputName.classList.toggle('active-input');
    });

const inputSurname = document.querySelector('.input-4');

    inputSurname.addEventListener('focus',(e)=>{
        inputSurname.classList.toggle('active-input');
    });

    inputSurname.addEventListener('blur',(e)=>{
        inputSurname.classList.toggle('active-input');
    });
