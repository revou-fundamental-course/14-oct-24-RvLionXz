// Navbar functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

// CustomAlert
const customAlert = document.getElementById('custom-alert');
const usernameInput = document.getElementById('username-input');
const submitUsername = document.getElementById('submit-username');
const welcomeMessage = document.getElementById('welcome-message');

submitUsername.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        welcomeMessage.textContent = `Hi ${username}, Welcome to the website`;
        customAlert.style.display = 'none';
    } else {
        alert('Please enter a valid username');
    }
});

// Photo slider 
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

const images = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1019/600/400'
];

function showSlide(index) {
    sliderContainer.innerHTML = `<img src="${images[index]}" alt="Landscape" class="slider-image">`;
}

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % images.length;
    showSlide(slideIndex);
});

showSlide(slideIndex);

// Cards Project
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
});

const messageForm = document.getElementById('message-form');
const outputName = document.getElementById('output-name');
const outputBirthdate = document.getElementById('output-birthdate');
const outputGender = document.getElementById('output-gender');
const outputMessage = document.getElementById('output-message');

messageForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    outputName.textContent = name;
    outputBirthdate.textContent = birthdate;
    outputGender.textContent = gender;
    outputMessage.textContent = message;
});
