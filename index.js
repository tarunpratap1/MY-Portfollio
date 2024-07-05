/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const contactform = document.getElementById('contact-form')
const contactmessage = document.getElementById('contact-message')

const sendemail = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_wk9mhgg', 'template_vmneoh9', '#contact-form', 'W3k_9qFTO_r0BHZpW')
    .then(() => {
        contactmessage.textContent = "Message Sent Successfully.";

        setTimeout(() => {
            contactmessage.textContent = ''
        }, 1000);
    }, () => {
        contactmessage.textContent = ('Message Cannot Sent Successfully.');

        setTimeout(() => {
            contactmessage.textContent = ''
        }, 1000);
    });
}

contactform.addEventListener("submit", sendemail)

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 500,
    delay: 400,
    reset: true
})

// sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
// sr.reveal(`.home__image`, {origin: 'bottom'})
// sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
// sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
// sr.reveal(`.services__card, .projects__card`, {interval: 100})