let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

let skillsSlideIndex = 0;
const skillsSlides = document.querySelectorAll(".skills-slide");

function showSkillsSlides() {
    skillsSlides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === skillsSlideIndex) slide.classList.add("active");
    });

    skillsSlideIndex = (skillsSlideIndex + 1) % skillsSlides.length;
    setTimeout(showSkillsSlides, 3000);
}

showSkillsSlides();
