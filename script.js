// Typing Animation
const text = ["Registered Nurse", "Medical Writer", "Data Analyst", "Academic Researcher"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("type-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

type();

// Particles.js Configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00d4ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00d4ff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Form Submission (for demo purposes)
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
});