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