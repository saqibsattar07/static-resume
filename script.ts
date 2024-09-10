const toggleSkillsButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLUListElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block";
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillsList.style.display = "none";
    toggleSkillsButton.textContent = "Show Skills";
  }
});
