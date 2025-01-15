document.addEventListener('DOMContentLoaded', () => {
    const roles = ["web developer", "Python developer", "freelancer"];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.querySelector("#about .typing");
    const typingSpeed = 100; // Speed of typing each character
    const erasingSpeed = 50; // Speed of erasing each character
    const newTextDelay = 2000; // Delay between current and next text

    function typeEffect() {
        if (charIndex < roles[index].length) {
            typingElement.textContent += roles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(eraseEffect, newTextDelay);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingElement.textContent = roles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, erasingSpeed);
        } else {
            index = (index + 1) % roles.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    function initTypingEffect() {
        if (typingElement) {
            setTimeout(typeEffect, newTextDelay);
        }
    }

    initTypingEffect();
});