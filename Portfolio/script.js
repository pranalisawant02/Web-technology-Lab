//step 1 : Dynamic project rendering
//data layer :-

const projects = [
  {
    title: "Smart Expense Tracker",
    description: "Tracks and analyzes spending behavior.",
    tech: "HTML, CSS, JS"
  },
  {
    title: "AI Waste Classifier",
    description: "Classifies waste using ML model.",
    tech: "Python, TensorFlow"
  },
  {
    title: "Yoga Mat AI",
    description: "Detects posture and gives feedback.",
    tech: "OpenCV, ML"
  }
];

//select the container
const container = document.querySelector(".projects.container");

//render projects
projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <small>${project.tech}</small>
  `;

  container.appendChild(card);
});