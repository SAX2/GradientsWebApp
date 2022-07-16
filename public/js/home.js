const btn = document.querySelector('.btn-m-i');
const chevron = document.querySelector('.chevron');

btn.addEventListener('mouseenter',()=>{
    chevron.classList.toggle('on');
    chevron.classList.toggle('off');
});

btn.addEventListener('mouseleave',()=>{
    chevron.classList.toggle('off');
    chevron.classList.toggle('on');
});