// Importing required libraries (html2pdf)

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('Shareable-link-container') as HTMLDivElement;
const shareableLink = document.getElementById('Shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Fetching user details from the form
    const userName = (document.getElementById('user name') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generating the resume and displaying it dynamically
    resumeDisplay.innerHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    
    // Generate the unique shareable URL based on the username
    const uniqueUrl = `${userName}.vercel.app/resume`;
    shareableLink.href = `https://${uniqueUrl}`;
    shareableLink.textContent = `https://${uniqueUrl}`;

    // Make the shareable link container visible
    shareableLinkContainer.style.display = 'block';
});

// Event listener for PDF download button
downloadPdfButton.addEventListener('click', () => {
    // Convert the dynamically generated resume content to PDF
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resumeDisplay).set(opt).save();
});
