import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['full stack developer.', 'passionate learner.', 'part time problem solver.'],
  typeSpeed: 50,
  loop: true
});

const typed1 = new Typed('#element1', {
  strings: ['social media!', 'Twitter', 'Instagram', 'Discord', 'LinkedIn', 'Github'],
  typeSpeed: 50,
  loop: true
});


// hover photo effect
const myPhoto = document.getElementById("my-photo");
// const sayHello = document.getElementById("say-hello");

myPhoto.addEventListener('mouseover', () => {
    myPhoto.setAttribute('src', 'profile/photo-me1.png');
    // sayHello.style.display = "block";
})

myPhoto.addEventListener('mouseleave', () => {
    myPhoto.setAttribute('src', 'profile/photo-me0.png');
    // sayHello.style.display = "none";
})


// Add smooth scrolling behavior when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});