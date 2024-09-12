// Get references to the form and display area.
const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;

// Handle form submission
form.addEventListener(`submit`, (event: Event)=> {
    event.preventDefault(); // prevent page reload

    //collect input values
    const name = (document.getElementById(`name`) as HTMLInputElement).value
    const email = (document.getElementById(`email`) as HTMLInputElement).value
    const phone = (document.getElementById(`Phone`) as HTMLInputElement).value
    const education = (document.getElementById(`education`) as HTMLInputElement).value
    const experience = (document.getElementById(`experience`) as HTMLInputElement).value
    const skills = (document.getElementById(`skills`) as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `<h2><b>Resume</b></h2>
    <h3<Prsonal Information</h3>
    <P><B>Name:</b>${name}</p>
    <P><B>email:</b>${email}</p>
    <P><B>phone:</b>${phone}</p>
    <h3<Education</h3>
    <P>${education}</p>
      <h3<Experience</h3>
    <P>${experience}</p>
      <h3<Skills</h3>
    <P>${skills}</p>`;

    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML=resumeHTML;
        }else {
            console.error(`The resume display element is missing`)
        }
})
