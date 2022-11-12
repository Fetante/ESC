const hamburger = document.querySelector('.hamburger');
const header_links = document.querySelector('.header-links');
const frost = document.querySelector('.frost');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    header_links.classList.toggle('active');
    frost.classList.toggle('active');    
})

