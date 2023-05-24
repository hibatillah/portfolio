import React from "react";
import { Bio } from "../components";

const Home = () => {
  return (
    <main className="container font-outfit">
      <div>
        <h1>M. Hibatillah Hasanin</h1>
        <h3 className="text-grey-dark">Habib</h3>
      </div>
      <div className="flex gap-4 mt-5">
        <a
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          View portfolio
        </a>
        <a
          href="https://instagram.com/hibat.illah"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Follow
        </a>
      </div>
      <div className="my-10 space-y-3">
        <h3 className="text-dark font-semibold">About</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, maiores. Assumenda, minus! Laborum magni maxime corporis, expedita minima libero, optio nostrum explicabo, amet reiciendis enim. Sequi culpa quasi reprehenderit deserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis natus eos, minima dolorum eius magnam molestiae consectetur fugiat laudantium.
        </p>
      </div>
      <Bio />
    </main>
  );
};

export default Home;
