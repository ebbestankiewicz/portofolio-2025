const projects = [
    {
        title: "Gamehub",
        description: "An online store for gamers to buy digital titles.",
        image: "images/gamehub-thumb.png",
        github: "https://github.com/ebbestankiewicz/Gamehub-js-ca",
        live: "https://ebbestankiewicz.github.io/Gamehub-js-ca//"
    },
    {
        title: "Semester Project 1",
        description: "A modern blog platform with post creation and editing.",
        image: "images/semester-thumb.png",
        github: "https://github.com/ebbestankiewicz/Semester-project-1",
        live: "https://ebbestankiewicz.github.io/Semester-project-1/"
    },
    {
        title: "Exam Project 1",
        description: "Full-featured blog app using Noroff API with login.",
        image: "images/exam-thumb.png",
        github: "https://github.com/ebbestankiewicz/FED1-PE1-ebbestankiewicz",
        live: "https://blueprintliving.netlify.app/"
    }
];

const container = document.getElementById("projects");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title} thumbnail" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="buttons">
            <a href="${project.github}" class="github-btn" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${project.live}" class="live-btn" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
        </div>
    `;
    container.appendChild(card);
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: remove after first trigger
            }
        });
    },
    { threshold: 0.1 }
);

  // Apply to all .animate elements
    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });


    let delay = 0;
    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card animate";
        card.style.transitionDelay = `${delay}s`;
        delay += 0.2;
    
        card.innerHTML = `...`;
    
        container.appendChild(card);
    });

    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader-wrapper");
        if (loader) {
            loader.style.opacity = 0;
            loader.style.pointerEvents = "none";
          setTimeout(() => loader.remove(), 500); // Optional: remove after fade
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks   = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    });