// FOOTER

// Create footer element
const footer = document.createElement("footer");

// Add footer to the body
document.body.appendChild(footer);

// Get current year
const today = new Date();
const thisYear = today.getFullYear();

// Create paragraph
const copyright = document.createElement("p");

// Add text inside paragraph
copyright.innerHTML = `© Anna Levinskaia ${thisYear}`;

// Add paragraph to footer
footer.appendChild(copyright);


// SKILLS SECTION

// Create array of skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];

// Select skills section
const skillsSection = document.querySelector("#skills");

// Select ul inside skills section
const skillsList = skillsSection.querySelector("ul");

// Loop through skills array
for (let i = 0; i < skills.length; i++) {

    // Create list item
    const skill = document.createElement("li");

    // Add skill text
    skill.innerText = skills[i];

    // Add li to ul
    skillsList.appendChild(skill);
}


// MESSAGE FORM SECTION

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>: ${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function (event) {
        const entry = event.target.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});

// PROJECTS SECTION (Fetch GitHub Repos)

const GITHUB_USERNAME = "AnnaLevinskaia";
const GITHUB_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

fetch(GITHUB_URL)
  .then((response) => response.json())
  .then((data) => {
    const repositories = data; // store response in variable named repositories
    console.log("repositories:", repositories);

    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("GitHub repos fetch error:", error);

    const projectSection = document.querySelector("#projects");
    projectSection.innerHTML += "<p>Sorry, projects could not be loaded right now.</p>";
  });