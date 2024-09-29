// Get Referencess //
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handel forms Submission //
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //Collect Input Values//
    var Name = document.getElementById('Name').value;
    var Father_Name = document.getElementById('Father Name').value;
    var E_Mail = document.getElementById('E-Mail').value;
    var DOB = document.getElementById('DOB').value;
    var Phone_Number = document.getElementById('Phone Number').value;
    var Education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // Generate The Resume //
    var resumeHTML = "\n    <h2><b>Editable Resume</b><h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n    <p><b>Father Name:</b><span contenteditable=\"true\">").concat(Father_Name, "</span></p>\n    <p><b>E-Mail:</b><span contenteditable=\"true\">").concat(E_Mail, "</span></p>\n    <p><b>DOB:</b><span contenteditable=\"true\">").concat(DOB, "</span></p>\n    <p><b>Phone Number:</b><span contenteditable=\"true\">").concat(Phone_Number, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(Education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(Experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(Skills, "</p>\n    ");
    //Display Resume //
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element is Missing. ');
    }
});
