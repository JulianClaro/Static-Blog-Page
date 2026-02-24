const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", ()=> {
    navLinks.classList.toggle("show");

});

window.addEventListener('scroll', () => {
    const navBar = document.querySelector(".topnav");
    if (this.scrollY >= 15){
        navBar.classList.add('hidden');
    }
    else {
        navBar.classList.remove('hidden');
    }
});


const slides = document.querySelectorAll(".featured-content-box a");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 9000);
    }

}

function showSlide(index){
    if (index >= slides.length){
        slideIndex = 0;
    }
    
    else if (index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide")

}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}

function filterPosts(category) {
    const posts = document.querySelectorAll('.recent-article-box');

    posts.forEach(post => {
        const categories = post.dataset.category;

        if (category === 'all') {
        post.style.display = 'flex';
        } else if (categories.includes(category)) {
        post.style.display = 'flex';
        } else {
        post.style.display = 'none';
        }
    });
}