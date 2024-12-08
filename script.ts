// TypeScript code in script.ts
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

resumeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(resumeForm);
    const username = formData.get("username") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const education = formData.get("education") as string;
    const skills = formData.get("skills") as string;
    const experience = formData.get("experience") as string;

    // Debug: Console mein values ko print karna
    console.log("Username:", username);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Education:", education);
    console.log("Skills:", skills);
    console.log("Experience:", experience);

    // Resume Display section ko dynamically populate karna
    resumeDisplay.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;
});
