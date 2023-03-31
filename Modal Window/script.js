'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const openModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
};
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown' , function(e) {
    if (e.key === 'Escape'){
       if(!modal.classList.contains('hidden')) {
        closeModal();
       };
    };
});