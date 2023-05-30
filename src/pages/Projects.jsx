import React from 'react'
import { ProjectCard } from '../components';
import { profile } from "../assets";

const Projects = () => {
  return (
    <main className="container font-outfit">
      <div>
        <h1>Projects</h1>
        <p className='mt-3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam repudiandae esse incidunt velit blanditiis consectetur deleniti aspernatur officiis non!
        </p>
      </div>
      <div className='mt-12 mb-10 grid grid-cols-1 gap-6'>
        <ProjectCard 
          img={profile}
          title='Massbeat - Aplikasi Workout dan Konsultasi Trainer'
          desc='UI Designer | Frontend developer'
          time='2022 - present'
        />
        <ProjectCard 
          img={profile}
          title='TurKita - Aplikasi Pemasaran Wisata dan UMKM'
          desc='UI Designer | Frontend developer'
          time='2023 - present'
        />
      </div>
    </main>
  );
}

export default Projects