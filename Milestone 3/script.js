// Get references to the form and display area.
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("Phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume content dynamically
    var resumeHTML = "<h2><b>Resume</b></h2>\n    <h3<Prsonal Information</h3>\n    <P><B>Name:</b>".concat(name, "</p>\n    <P><B>email:</b>").concat(email, "</p>\n    <P><B>phone:</b>").concat(phone, "</p>\n    <h3<Education</h3>\n    <P>").concat(education, "</p>\n      <h3<Experience</h3>\n    <P>").concat(experience, "</p>\n      <h3<Skills</h3>\n    <P>").concat(skills, "</p>");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
