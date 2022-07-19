const btn = document.getElementById('btn-1');
const chevron = document.getElementById('chevron-1');

btn.addEventListener('mouseenter',()=>{
    chevron.classList.toggle('on');
    chevron.classList.toggle('off');
});

btn.addEventListener('mouseleave',()=>{
    chevron.classList.toggle('off');
    chevron.classList.toggle('on');
});

const btn2 = document.getElementById('btn-2');
const chevron2 = document.getElementById('chevron-2');

btn2.addEventListener('mouseenter',()=>{
    chevron2.classList.toggle('on');
    chevron2.classList.toggle('off');
});

btn2.addEventListener('mouseleave',()=>{
    chevron2.classList.toggle('off');
    chevron2.classList.toggle('on');
});