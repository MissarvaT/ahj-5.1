const button = document.querySelector('.btn');
const popover = document.querySelector('.popover');

const {top, left, width} = button.getBoundingClientRect();

button.addEventListener('click', e => {
    e.preventDefault();

    popover.classList.toggle('popover_hidden');
    
    const popoverWidth= popover.getBoundingClientRect().width;
    const {height} = popover.getBoundingClientRect();
    popover.style.top = `${top - height - 5}px`;
    popover.style.left = `${left - (popoverWidth - width)/2}px`
})