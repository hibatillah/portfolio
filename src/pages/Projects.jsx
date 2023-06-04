import React, { useEffect } from "react";
import { Bio, ProjectCard } from "../components";
import { projects } from "../db";

const Projects = () => {
  useEffect(() => {
    document.title = "Hibatillah's Projects";
  }, []);

  return (
    <main className="container font-outfit lg:grid lg:grid-cols-3 lg:gap-12">
      <div className="lg:col-span-2">
        <div>
          <h1>Projects</h1>
          <p className="mt-3 md:mt-4">
            I like to make projects from various things that have been learned.
            Here are some projects I've done.
          </p>
        </div>
        {/* project list */}
        <ul className="mt-12 mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <li key={i}>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ProjectCard key={i} project={project} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:block lg:mt-12">
        <Bio />
      </div>
    </main>
  );
};

export default Projects;
