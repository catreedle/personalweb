import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#element", {
	strings: [
		"full stack developer.",
		"lifelong learner",
		"problem solver in progress.",
		"open source enthusiast",
	],
	typeSpeed: 50,
	loop: true,
});

const typed1 = new Typed("#element1", {
	strings: ["social media!", "Discord", "LinkedIn", "Github"],
	typeSpeed: 50,
	loop: true,
});

// hover photo effect
const myPhoto = document.getElementById("my-photo");
const sayHello = document.getElementById("say-hello");

myPhoto.addEventListener("mouseover", () => {
	myPhoto.setAttribute("src", "profile/photo-me1.png");
	sayHello.style.visibility = "visible";
	sayHello.style.opacity = 1;
});

myPhoto.addEventListener("mouseleave", () => {
	myPhoto.setAttribute("src", "profile/photo-me0.png");
	sayHello.style.visibility = "hidden";
});

// Add smooth scrolling behavior when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

const appreciateBtn = document.getElementById("flying-butterfly");
appreciateBtn.addEventListener("click", () => {
	const myCanvas = document.createElement("canvas");
	myCanvas.style.position = "fixed";
	myCanvas.style.inset = 0;
	myCanvas.style.width = "100vw";
	myCanvas.style.height = "100vh";
	myCanvas.style.zIndex = -1;
	document.body.appendChild(myCanvas);

	const myConfetti = confetti.create(myCanvas, {
		resize: true,
		useWorker: true,
	});

	const sakura = confetti.shapeFromText({ text: "🌸" });
	const rosette = confetti.shapeFromText({ text: "🏵️" });
	const white = confetti.shapeFromText({ text: "💮" });
	const clover = confetti.shapeFromText({ text: "🍀" });

	myConfetti({
		shapes: [sakura, rosette, white, clover],
		particleCount: 100,
		spread: 160,
	});
});

function sendEmail(event) {
	event.preventDefault();
	let messageInput = document.getElementById("message");
	let message = messageInput.value.trim();

	if (message === "") {
		return;
	}

	let subject = "sent via purnamadev";
	let recipient = "purnamasrahayu@gmail.com";

	window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(message)}`;

	// Empty field after send
	messageInput.value = "";
}

window.sendEmail = sendEmail;
