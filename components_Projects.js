const Projects = () => (
  <section id="projects" className="my-8">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <ul className="space-y-4">
      <li>
        <h3 className="font-semibold">Project One</h3>
        <p>Brief description of the project.</p>
        <a
          className="text-blue-600 underline"
          href="https://github.com/yourusername/project-one"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </li>
      <li>
        <h3 className="font-semibold">Project Two</h3>
        <p>Short summary of your other project.</p>
        <a
          className="text-blue-600 underline"
          href="https://github.com/yourusername/project-two"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </li>
    </ul>
  </section>
);

export default Projects;