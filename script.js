const projects = [
  {
    title: "Product Landing Page",
    image: "./Pictures/product-landing-page.png",
    description: "A responsive product landing page built with HTML and CSS",
    liveUrl: "https://product-landing-page-seven-orpin.vercel.app/",
    githubUrl: "https://github.com/nas2211/Product-Landing-Page",
    technologies: ["HTML", "CSS"],
  },
  // Add other projects...
];

function createProjectTiles() {
  const projectGrid = document.querySelector(".project-grid");
  projects.forEach((project) => {
    projectGrid.innerHTML += `
      <div class="project-tile">
        <a href="${project.liveUrl}" target="_blank">
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
              ${project.technologies
                .map((tech) => `<span>${tech}</span>`)
                .join("")}
            </div>
          </div>
        </a>
        <div class="project-links">
          <a href="${project.liveUrl}" target="_blank" class="site-link">
            <i class="fas fa-globe"></i> Live Site
          </a>
          <a href="${project.githubUrl}" target="_blank" class="github-link">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    `;
  });
}
