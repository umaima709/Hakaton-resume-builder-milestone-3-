interface PersonalInfo {
    name: string;
    email: string;
}

interface Education {
    degree: string;
    institution: string;
    year: number;
}

interface WorkExperience {
    jobTitle: string;
    company: string;
    duration: string;
}

interface Skills {
    skills: string[];
}

interface Resume {
    personalInfo: PersonalInfo;
    education: Education;
    workExperience: WorkExperience;
    skills: Skills;
}

function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const year = parseInt((document.getElementById('year') as HTMLInputElement).value);
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    const resume: Resume = {
        personalInfo: { name, email },
        education: { degree, institution, year },
        workExperience: { jobTitle, company, duration },
        skills: { skills }
    };

    displayResume(resume);
}

function displayResume(resume: Resume): void {
    const output = document.getElementById('resumeOutput')!;
    output.innerHTML = `
        <h2>${resume.personalInfo.name}</h2>
        <p>Email: ${resume.personalInfo.email}</p>
        
        <h3>Education</h3>
        <p>Degree: ${resume.education.degree}</p>
        <p>Institution: ${resume.education.institution}</p>
        <p>Year of Graduation: ${resume.education.year}</p>
        
        <h3>Work Experience</h3>
        <p>Job Title: ${resume.workExperience.jobTitle}</p>
        <p>Company: ${resume.workExperience.company}</p>
        <p>Duration: ${resume.workExperience.duration}</p>
        
        <h3>Skills</h3>
        <ul>
            ${resume.skills.skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;
}
