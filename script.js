// ===============================
// WS GENERAL SERVICES
// Website Animations
// ===============================


// Header effect when scrolling

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.92)";

    }else{

        header.style.background = "rgba(0,0,0,0.55)";

    }

});




// Reveal animations

const elements = document.querySelectorAll(
".card, .stat, .review-card, .gallery img, .about-text"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";


}


});


},{

threshold:0.15

});




elements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.7s ease";


observer.observe(element);


});




// Smooth menu close on mobile

const links = document.querySelectorAll("nav a");


links.forEach(link=>{


link.addEventListener("click",()=>{


window.scrollBy(0, -80);


});


});
