// 1. Project Data (with GitHub links)
const projects = [
  {
    title: "Fake Exam Proctor",
    description: "Exam Behavior Monitor",
    github: "https://github.com/pranalisawant02/Web-technology-Lab/tree/main/Fake_Exam_Proctor"
  },
  {
    title: "Kalaprasad Masale Website",
    description: "Traditional Spice Platform",
    github: "https://github.com/pranalisawant02/Web-technology-Lab/tree/main/mini_project"
  }
];

// 2. Select container
const container = document.querySelector(".projects-container");

// 3. Function using Promise (simulating async loading)
function loadProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects); // return data after delay
    }, 1000);
  });
}

// 4. Render projects

loadProjects().then((data) => {
  data.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button class="open-btn">View Code</button>
    `;

    // 5. Event: click opens GitHub
    card.querySelector(".open-btn").addEventListener("click", () => {
      window.open(project.github, "_blank");
    });

    container.appendChild(card);
  });
});

//////////////////////////////////////////////////

// 6. Scroll Button
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});

//////////////////////////////////////////////////

// 7. Form Handling + Simple Validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name === "" || email === "") {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();
      alert(data.message);
      form.reset();

    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  });
}