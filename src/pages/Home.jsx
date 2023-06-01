import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bio, EduCard, Banner } from "../components";
import { profile, pcr, imsya } from "../assets";

const Home = () => {
  useEffect(() => {
    document.title = "Hibatillah";
  }, []);

  return (
    <main className="container font-outfit relative">
      <div className="absolute left-4 -top-16 w-28 h-28 overflow-hidden border-4 border-white rounded-full shadow-xl md:left-12">
        <img
          src={profile}
          alt="profile"
          className="object-cover w-full h-full select-none pointer-events-none"
        />
      </div>
      <div className="mt-12">
        <h1>M. Hibatillah Hasanin</h1>
        <h3 className="text-grey-dark">Habib</h3>
      </div>
      {/* cta */}
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
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-12 lg:mt-8">
        <div className="lg:order-1 lg:col-span-2">
          <div className="my-10 space-y-3 order-1">
            <h3 className="text-dark font-semibold">About</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              maiores. Assumenda, minus! Laborum magni maxime corporis, expedita
              minima libero, optio nostrum explicabo, amet reiciendis enim.
              Sequi culpa quasi reprehenderit deserunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              veritatis natus eos, minima dolorum eius magnam molestiae
              consectetur fugiat laudantium.
            </p>
          </div>
          <div className="lg:hidden">
            <Bio />
          </div>
          <div className="order-3 md:grid md:grid-cols-2 md:gap-6 lg:order-2 lg:grid-cols-1">
            {/* edu history */}
            <div className="my-10 flex flex-col gap-4 md:col-span-1 lg:my-0">
              <h3 className="text-dark font-semibold">Education</h3>
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
                <a
                  href="https://www.instagram.com/politeknikcaltexriau/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EduCard
                    img={pcr}
                    title="Politeknik Caltex Riau"
                    desc="Diploma 4 - Sistem Informasi"
                    time="2021 - present"
                  />
                </a>
                <a
                  href="https://www.instagram.com/imam_syafii_2_pekanbaru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EduCard
                    img={imsya}
                    title="SMA IT Imam Syafi'i 2 Pekanbaru"
                    desc="Jurusan IPA"
                    time="2018 - 2021"
                  />
                </a>
              </div>
            </div>
            {/* skill */}
            <div className="my-10 space-y-3 md:col-span-1 lg:my-5">
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
          </div>
        </div>
        <div className="hidden lg:block lg:order-3 lg:mt-6">
          <Bio />
        </div>
      </div>
    </main>
  );
};

export default Home;
