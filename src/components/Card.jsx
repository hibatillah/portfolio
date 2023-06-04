import React from "react";

export const EduCard = ({ img, title, desc, time }) => {
  return (
    <div className="flex gap-5 p-4 rounded-lg border border-grey-dark cursor-pointer press">
      <img
        src={img}
        alt="thumbnail"
        className="w-10 h-10 object-contain rounded-xl"
      />
      <div>
        <h4 className="text-lg text-primary font-medium">{title}</h4>
        <p>{desc}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export const ProjectCard = ({ project }) => {
  const { title, thumbnail, tag, source } = project;

  return (
    <div className="h-full rounded-lg border border-grey-dark cursor-pointer press group/card">
      <div className="p-4 flex gap-5">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-32 h-24 rounded-lg object-contain"
        />
        <div>
          <h4 className="text-lg text-primary font-medium">{title}</h4>
          <p className="capitalize">{tag.join(" • ")}</p>
        </div>
      </div>
      <div className="flex items-center border-t border-grey-dark text-end text-sm text-dark md:text-base">
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none group/source"
        >
          <div className="px-4 py-3 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 stroke-grey-dark group-hover/source:stroke-primary group-hover/source:stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>
        </a>
        <div className="flex-auto group">
          <div className="px-4 py-3 text-grey-dark border-l border-grey-dark group-hover/card:text-primary group-hover/card:font-medium">View Project</div>
        </div>
      </div>
    </div>
  );
};

export const BookmarkCard = ({ img, title, label }) => {
  return (
    <div className="h-full flex items-center gap-4 rounded-xl p-4 border border-grey-dark cursor-pointer press">
      <img src={img} alt="thumbnail" className="w-12 h-12 rounded-xl" />
      <div>
        <h4 className="text-lg text-primary font-medium first-letter:capitalize">
          {title}
        </h4>
        <div className="flex items-center gap-1 lowercase">
          <p>{label.join(" • ")}</p>
        </div>
      </div>
    </div>
  );
};
