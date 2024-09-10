var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var educationInput = document.getElementById("education");
var workExperienceInput = document.getElementById("work-experience");
var skillsInput = document.getElementById("skills");
var profilePicInput = document.getElementById("profile-pic");
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayEducation = document.getElementById("display-education");
var displayWorkExperience = document.getElementById("display-work-experience");
var displaySkills = document.getElementById("display-skills");
var displayPic = document.getElementById("display-pic");
var errorName = document.createElement('p');
var errorEmail = document.createElement('p');
var errorEducation = document.createElement('p');
var errorWorkExperience = document.createElement('p');
var errorSkills = document.createElement('p');
var errorStyle = function (element) {
    element.style.color = 'red';
    element.style.fontSize = '0.8rem';
};
errorStyle(errorName);
errorStyle(errorEmail);
errorStyle(errorEducation);
errorStyle(errorWorkExperience);
errorStyle(errorSkills);
nameInput.insertAdjacentElement('afterend', errorName);
emailInput.insertAdjacentElement('afterend', errorEmail);
educationInput.insertAdjacentElement('afterend', errorEducation);
workExperienceInput.insertAdjacentElement('afterend', errorWorkExperience);
skillsInput.insertAdjacentElement('afterend', errorSkills);
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validateFields() {
    if (!nameInput.value.trim()) {
        errorName.textContent = "Name is required";
    }
    else {
        errorName.textContent = "";
    }
    if (!emailInput.value.trim()) {
        errorEmail.textContent = "Email is required";
    }
    else if (!validateEmail(emailInput.value.trim())) {
        errorEmail.textContent = "Please enter a valid email address";
    }
    else {
        errorEmail.textContent = "";
    }
    if (!educationInput.value.trim()) {
        errorEducation.textContent = "Education is required";
    }
    else {
        errorEducation.textContent = "";
    }
    if (!workExperienceInput.value.trim()) {
        errorWorkExperience.textContent = "Work Experience is required";
    }
    else {
        errorWorkExperience.textContent = "";
    }
    if (!skillsInput.value.trim()) {
        errorSkills.textContent = "Skills are required";
    }
    else {
        errorSkills.textContent = "";
    }
}
function updateResume() {
    validateFields();
    if (!errorName.textContent) {
        displayName.textContent = nameInput.value || "Your Name";
    }
    if (!errorEmail.textContent) {
        displayEmail.textContent = emailInput.value || "Your Email";
    }
    if (!errorEducation.textContent) {
        displayEducation.textContent = educationInput.value || "Your Education";
    }
    if (!errorWorkExperience.textContent) {
        displayWorkExperience.textContent = workExperienceInput.value || "Your Work Experience";
    }
    if (!errorSkills.textContent) {
        var skills = skillsInput.value.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill; });
        displaySkills.innerHTML = '';
        skills.forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill;
            displaySkills.appendChild(li);
        });
    }
}
nameInput.addEventListener('input', updateResume);
emailInput.addEventListener('input', updateResume);
educationInput.addEventListener('input', updateResume);
workExperienceInput.addEventListener('input', updateResume);
skillsInput.addEventListener('input', updateResume);
profilePicInput.addEventListener('change', function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            displayPic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
