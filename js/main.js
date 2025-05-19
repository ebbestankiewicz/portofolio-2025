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