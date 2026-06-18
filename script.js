const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(item => {
            if(item !== answer){
                item.style.display = "none";
            }
        });

        answer.style.display =
            answer.style.display === "block"
            ? "none"
            : "block";
    });
});


window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.15)";
    }else{
        header.style.boxShadow =
            "0 2px 10px rgba(0,0,0,.08)";
    }
});

let slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index){
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 10000);


function scrollToCard(index){
    const container = document.getElementById("deliverScroll");
    const cards = container.querySelectorAll(".deliver-card");
    const target = cards[index];

    container.scrollTo({
        left: target.offsetLeft - 20,
        behavior: "smooth"
    });

    currentIndex = index;
}

let currentIndex = 0;

function autoScrollDeliver(){
    const container = document.getElementById("deliverScroll");
    const cards = container.querySelectorAll(".deliver-card");

    currentIndex++;

    if(currentIndex >= cards.length){
        currentIndex = 0;
    }

    const target = cards[currentIndex];

    container.scrollTo({
        left: target.offsetLeft - 20,
        behavior: "smooth"
    });
}

// auto-scroll every 4 seconds
let deliverInterval = setInterval(autoScrollDeliver, 4000);