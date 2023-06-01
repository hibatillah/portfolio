import React, { useEffect } from "react";
import { Bio, ProjectCard } from "../components";
import { profile } from "../assets";

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nam repudiandae esse incidunt velit blanditiis consectetur deleniti
            aspernatur officiis non!
          </p>
        </div>
        {/* project list */}
        <div className="mt-12 mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProjectCard
            img={profile}
            title="Massbeat - Aplikasi Workout dan Konsultasi Trainer"
            desc="UI Designer | Frontend developer"
            time="2022 - present"
          />
          <ProjectCard
            img={profile}
            title="TurKita - Aplikasi Pemasaran Wisata dan UMKM"
            desc="UI Designer | Frontend developer"
            time="2023 - present"
          />
        </div>
      </div>
      <div className="hidden lg:block lg:mt-12">
        <Bio />
      </div>
    </main>
  );
};

export default Projects;
