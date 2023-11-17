import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['full stack developer', 'passionate learner', 'part time problem solver'],
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