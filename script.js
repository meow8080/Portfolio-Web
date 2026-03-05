const roles = [
    "Aspiring Web Developer",
    "Problem Solver",
    "Frontend Learner",
    "Tech Enthusiast"
  ];

    const roleElement = document.getElementById("role");

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
        // Typing
        roleElement.textContent = currentRole.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            setTimeout(() => (isDeleting = true), 1200); // pause after typing
        }
        } else {
        // Deleting
        roleElement.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        }

        const speed = isDeleting ? 60 : 100;
        setTimeout(typeEffect, speed);
    }

    typeEffect();

setInterval(() => {
    index = (index + 1) % roles.length;
    roleElement.textContent = roles[index];
}, 2000);

document.getElementById("sayHiBtn").addEventListener("click", () => {
    alert("Hey there! 👋\nThanks for visiting my portfolio 😊");
});