const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const workExperienceInput = document.getElementById("work-experience") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;

const displayName = document.getElementById("display-name")!;
const displayEmail = document.getElementById("display-email")!;
const displayEducation = document.getElementById("display-education")!;
const displayWorkExperience = document.getElementById("display-work-experience")!;
const displaySkills = document.getElementById("display-skills")!;
const displayPic = document.getElementById("display-pic") as HTMLImageElement;

const errorName = document.createElement('p');
const errorEmail = document.createElement('p');
const errorEducation = document.createElement('p');
const errorWorkExperience = document.createElement('p');
const errorSkills = document.createElement('p');

const errorStyle = (element: HTMLParagraphElement) => {
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

function validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateFields(): void {
    if (!nameInput.value.trim()) {
        errorName.textContent = "Name is required";
    } else {
        errorName.textContent = "";
    }

    if (!emailInput.value.trim()) {
        errorEmail.textContent = "Email is required";
    } else if (!validateEmail(emailInput.value.trim())) {
        errorEmail.textContent = "Please enter a valid email address";
    } else {
        errorEmail.textContent = "";
    }

    if (!educationInput.value.trim()) {
        errorEducation.textContent = "Education is required";
    } else {
        errorEducation.textContent = "";
    }

    if (!workExperienceInput.value.trim()) {
        errorWorkExperience.textContent = "Work Experience is required";
    } else {
        errorWorkExperience.textContent = "";
    }

    if (!skillsInput.value.trim()) {
        errorSkills.textContent = "Skills are required";
    } else {
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
        const skills = skillsInput.value.split(',').map(skill => skill.trim()).filter(skill => skill);
        displaySkills.innerHTML = ''; 
        skills.forEach(skill => {
            const li = document.createElement('li');
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

profilePicInput.addEventListener('change', function(event) {
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayPic.src = e.target!.result as string;
        }
        reader.readAsDataURL(file);
    }
});
