const hamburger= document.querySelector('.hamburger');
const navLinks= document.querySelector('.nav-links');
let menuOpen= false;

hamburger.addEventListener('click', () => {
  if (menuOpen == false) {
    navLinks.style.display = "block";
    menuOpen = true;
  }
  else if (menuOpen == true) {
    navLinks.style.display = "none";
    menuOpen = false;
  }
});

// Smooth scrolling for anchor links
const cards = document.querySelectorAll('.product-card, .service-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

cards.forEach(card => observer.observe(card));


// Smooth scrolling for anchor links
var copy = document.querySelector(".brands-slide").cloneNode(true);
document.querySelector(".brands").appendChild(copy);


const feedbackSlider = document.querySelector('.feedback-slider');
const feedbackItems = document.querySelectorAll('.feedback-item');
const prevButton = document.getElementById('prev-feedback');
const nextButton = document.getElementById('next-feedback');

let currentIndex = 0;
const numItems = feedbackItems.length;

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === numItems - 1;
}

function showFeedback(index) {
    if (index < 0) {
        currentIndex = 0;
    } else if (index >= numItems) {
        currentIndex = numItems - 1;
    } else {
        currentIndex = index;
    }

    const scrollAmount = feedbackItems[currentIndex].offsetLeft - feedbackSlider.offsetLeft;
    feedbackSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
    updateButtons();
}

prevButton.addEventListener('click', () => {
    showFeedback(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showFeedback(currentIndex + 1);
});

// Initialize
updateButtons();
showFeedback(currentIndex); //show the first item on load

// Optional: Auto-scroll (Basic - Consider more robust solutions for production)
let intervalId;
function startAutoScroll() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % numItems;
        showFeedback(currentIndex);
    }, 5000); // Auto-scroll every 5 seconds
}

function stopAutoScroll() {
    clearInterval(intervalId);
}

feedbackSlider.addEventListener('mouseenter', stopAutoScroll);
feedbackSlider.addEventListener('mouseleave', startAutoScroll);
startAutoScroll(); // Start auto-scroll

// Initialize the slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
setInterval(function () {
    plusSlides(1);
}, 5000); // Change image every 3 seconds (3000 milliseconds)

                    document.querySelector('form').addEventListener('submit', function(e) {
                        e.preventDefault();
                        this.submit();
                        window.location.href = 'thankyou.html';
                    });