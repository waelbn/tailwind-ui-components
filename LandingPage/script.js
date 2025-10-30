const menuBtn = document.querySelector('.menu-btn');
const menuToggle=document.querySelector('.toggle-menu');
const links=document.querySelectorAll(".js-link")

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
isOpen = menuBtn.getAttribute('aria-expanded')==='true'
menuBtn.setAttribute("aria-expanded",!isOpen)
menuToggle.classList.toggle('hidden')
menuToggle.classList.toggle('flex')

}

links.forEach(el=>el.addEventListener('click',toggleMenu))