// Importing required libraries (html2pdf)
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('Shareable-link-container');
var shareableLink = document.getElementById('Shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Fetching user details from the form
    var userName = document.getElementById('user name').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generating the resume and displaying it dynamically
    resumeDisplay.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Generate the unique shareable URL based on the username
    var uniqueUrl = "".concat(userName, ".vercel.app/resume");
    shareableLink.href = "https://".concat(uniqueUrl);
    shareableLink.textContent = "https://".concat(uniqueUrl);
    // Make the shareable link container visible
    shareableLinkContainer.style.display = 'block';
});
// Event listener for PDF download button
downloadPdfButton.addEventListener('click', function () {
    // Convert the dynamically generated resume content to PDF
    var opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeDisplay).set(opt).save();
});
