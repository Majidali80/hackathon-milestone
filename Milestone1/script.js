// Function to toggle the visibility of the skills section
function toggleSkillsVisibility() {
    var skillsSection = document.getElementById("skills");
    // Check if the section exists
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block"; // Show the section
        }
        else {
            skillsSection.style.display = "none"; // Hide the section
        }
    }
}
// Ensure the DOM has loaded before adding the event listener
window.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the button to toggle the skills section visibility
    var toggleButton = document.getElementById("toggle-skills");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleSkillsVisibility);
    }
});
