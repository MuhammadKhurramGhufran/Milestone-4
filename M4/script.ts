// Get Referencess //
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handel forms Submission //
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    //Collect Input Values//

    const Name = (document.getElementById('Name') as HTMLInputElement).value
    const Father_Name = (document.getElementById('Father Name') as HTMLInputElement).value
    const E_Mail = (document.getElementById('E-Mail') as HTMLInputElement).value
    const  DOB = (document.getElementById('DOB') as HTMLInputElement).value
    const Phone_Number = (document.getElementById('Phone Number') as HTMLInputElement).value
    const Education = (document.getElementById('Education') as HTMLInputElement).value
    const Experience = (document.getElementById('Experience') as HTMLInputElement).value
    const Skills = (document.getElementById('Skills') as HTMLInputElement).value 
     
    // Generate The Resume //
    
    const resumeHTML = `
    <h2><b>Editable Resume</b><h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${Name}</span></p>
    <p><b>Father Name:</b><span contenteditable="true">${Father_Name}</span></p>
    <p><b>E-Mail:</b><span contenteditable="true">${E_Mail}</span></p>
    <p><b>DOB:</b><span contenteditable="true">${DOB}</span></p>
    <p><b>Phone Number:</b><span contenteditable="true">${Phone_Number}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${Experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">${Skills}</p>
    `;
    //Display Resume //
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The Resume Display Element is Missing. ');

    }
});