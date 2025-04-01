document.addEventListener("DOMContentLoaded", () => {
    fetchClasses();
})
function fetchClasses() {
    const classes = [
    
        { id: 1, name: "HIIT", description: "High-intensity interval training for maximum results.", image: "hiit.jpg" },
    ];
    
    displayClasses(classes);
}

function displayClasses(classes) {
    const classContainer = document.getElementById("classes-container");
    classContainer.innerHTML = "";

    classes.forEach(gymClass => {
        const classElement = document.createElement("div");
        classElement.classList.add("gym-class");
        classElement.innerHTML = `
            <img src="${gymClass.image}" alt="${gymClass.name}" class="gym-class-image">
            <h3>${gymClass.name}</h3>
            <p>${gymClass.description}</p>
            <button class="join-btn" data-id="${gymClass.id}">Join Class</button>
        `;
        classContainer.appendChild(classElement);
    });
}
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required!");
        return;
    }document.addEventListener("DOMContentLoaded", () => {
        fetchClasses();
    });
    
    function fetchClasses() {
        const classes = [
            { id: 1, name: "Yoga", description: "Relax and stretch with our expert yoga instructors.", image: "yoga.jpg" },
            { id: 2, name: "HIIT", description: "High-intensity interval training for maximum results.", image: "hiit.jpg" },
            { id: 3, name: "Weightlifting", description: "Build strength and muscle with our weightlifting program.", image: "weightlifting.jpg" },
        ];
        
        displayClasses(classes);
    }
    
    function displayClasses(classes) {
        const classContainer = document.getElementById("classes-container");
        classContainer.innerHTML = ""; 
    
        classes.forEach(gymClass => {
            const classElement = document.createElement("div");
            classElement.classList.add("gym-class");
            classElement.innerHTML = `
                <img src="images/${gymClass.image}" alt="${gymClass.name}" class="gym-class-image">
                <h3>${gymClass.name}</h3>
                <p>${gymClass.description}</p>
                <button class="join-btn" data-id="${gymClass.id}">Join Class</button>
            `;
            classContainer.appendChild(classElement);
        });
    }
    

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Sign-up successful! Welcome to our gym.");
    this.reset(); 
});
