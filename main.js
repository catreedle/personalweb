import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['full stack developer', 'passionate learner', 'part time problem solver'],
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

myPhoto.addEventListener('mouseover', () => {
    myPhoto.setAttribute('src', 'public/photo-me1.png');
})

myPhoto.addEventListener('mouseleave', () => {
    myPhoto.setAttribute('src', 'public/photo-me0.png');
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