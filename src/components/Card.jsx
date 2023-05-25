import React from "react";
import { Link } from "react-router-dom";

export const EduCard = ({ img, title, desc, time }) => {
  return (
    <div className="flex gap-5 p-4 rounded-lg border border-grey-dark">
      <img src={img} alt="thumbnail" className="w-10 h-10 rounded-xl" />
      <div>
        <h4 className="text-lg text-primary font-medium">{title}</h4>
        <p>{desc}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export const ProjectCard = ({ img, title, desc, time }) => {
  return (
    <div className="rounded-lg border border-grey-dark">
      <div className="p-4 flex gap-5">
        <img src={img} alt="thumbnail" className="w-12 h-12 rounded-lg" />
        <div>
          <h4 className="text-lg text-primary font-medium">{title}</h4>
          <p>{desc}</p>
          <p>{time}</p>
        </div>
      </div>
      <Link to={`/project/${1}`}>
        <div className="px-4 py-3 border-t border-grey-dark text-end text-sm text-dark">
          View Project
        </div>
      </Link>
    </div>
  );
};
