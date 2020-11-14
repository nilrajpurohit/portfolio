const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav-toggle','nav-menu');

/* Remove menu mobile when click on link */

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

//Scroll Section Active Link 

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll',scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach( current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration:2000,
    reset: true
})

// SCROLL HOME
sr.reveal('.home_title',{})
sr.reveal('.home_scroll',{delay:200})
sr.reveal('.home_img',{origin:'right',delay:400})

// SCROLL ABOUT
sr.reveal('.about_img',{delay:500})
sr.reveal('.about_subtitle',{delay:300})
sr.reveal('.about_profession',{delay:400})
sr.reveal('.about_text',{delay:500})
sr.reveal('.about_social-icon',{delay:600,interval: 200})

//SCROLL SKILLS
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_name',{distance: '20px',delay:50,interval:100})
sr.reveal('.skills_img',{delay:400})

//SCROLL PORTFOLIO
sr.reveal('.portfolio_img',{interval:200})


var loader = document.querySelector('#loader');
var main = document.querySelector('#main');
window.addEventListener('load',vanish);

function vanish(){
    loader.classList.add('disppear');
}