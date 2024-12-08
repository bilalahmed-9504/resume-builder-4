// TypeScript code in script.ts
var resumeForm = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(resumeForm);
    var username = formData.get("username");
    var name = formData.get("name");
    var email = formData.get("email");
    var phone = formData.get("phone");
    var address = formData.get("address");
    var education = formData.get("education");
    var skills = formData.get("skills");
    var experience = formData.get("experience");
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
    resumeDisplay.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Username:</strong> ").concat(username, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
});
