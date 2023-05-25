import React from "react";
import { Link } from "react-router-dom";
import { Bio, EduCard, Banner } from "../components";
import { profile } from "../assets";

const Home = () => {
  return (
    <main className="container font-outfit relative">
      <div className="absolute left-4 -top-28 w-28 h-28 overflow-hidden border-4 border-white rounded-full shadow-xl">
        <img
          src={profile}
          alt="profile"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-12">
        <h1>M. Hibatillah Hasanin</h1>
        <h3 className="text-grey-dark">Habib</h3>
      </div>
      <div className="flex gap-4 mt-5">
        <Link to="/projects" className="btn btn-secondary">
          View portfolio
        </Link>
        <a
          href="https://instagram.com/hibat.illah"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <div className="flex gap-1 -translate-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Follow
          </div>
        </a>
      </div>
      <div className="my-10 space-y-3">
        <h3 className="text-dark font-semibold">About</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          maiores. Assumenda, minus! Laborum magni maxime corporis, expedita
          minima libero, optio nostrum explicabo, amet reiciendis enim. Sequi
          culpa quasi reprehenderit deserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis
          natus eos, minima dolorum eius magnam molestiae consectetur fugiat
          laudantium.
        </p>
      </div>
      <Bio />
      <div className="my-10 space-y-4">
        <h3 className="text-dark font-semibold">Education</h3>
        <EduCard
          img={profile}
          title="Politeknik Caltex Riau"
          desc="Diploma 4 - Sistem Informasi"
          time="2021 - present"
        />
        <EduCard
          img={profile}
          title="SMA IT Imam Syafi'i 2 Pekanbaru"
          desc="Kejuruan IPA"
          time="2018 - 2021"
        />
      </div>
      <div className="my-10 space-y-3">
        <h3 className="text-dark font-semibold">Skill</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-4">
          <Banner title="UI/UX Design" time="2,5 Tahun" />
          <Banner title="Frontend dev" time="1 Tahun" />
          <Banner title="Reactjs" time="0,5 Tahun" />
          <Banner title="Tailwindcss" time="0,5 Tahun" />
          <Banner title="Bootstrap" time="0,5 Tahun" />
          <Banner title="React Native" time="just now" />
        </div>
      </div>
    </main>
  );
};

export default Home;
