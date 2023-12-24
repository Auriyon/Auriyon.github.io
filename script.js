
/*const typedTextSpan = document.querySelector(".typed-text");
const typedTextSpan2 = document.querySelector(".typed-text2");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" Developer", " Designer", " Freelancer"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
    const currentWord = textArray[textArrayIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typedTextSpan.textContent = currentChar;
    typedTextSpan.classList.add("typing");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(type, 150);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(type, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        typedTextSpan.classList.remove("typing");
        textArrayIndex = !isDeleting ? (textArrayIndex + 1) % textArray.length : textArrayIndex;
        setTimeout(type, 1200);
    }
}
type();
const typeEffect = () => {
    const currentWord = textArray[textArrayIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typedTextSpan2.textContent = currentChar;
    typedTextSpan2.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        typedTextSpan2.classList.remove("stop-blinking");
        textArrayIndex = !isDeleting ? (textArrayIndex + 1) % textArray.length : textArrayIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();*/

var typed = new Typed(".typed-text", {
    strings: [" Developer", " Designer", " Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
 var typed = new Typed(".typed-text2", {
        strings: [ "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });