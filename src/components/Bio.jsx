import React from "react";

const Bio = () => {
  const info = {
    location: "Riau, Indonesia",
    email: "hibatillah21si@mahasiswa.pcr.ac.id",
    linkedin: "https://linkedin.com/in/hibatillah",
    github: "https://github.com/hibatillah",
    instagram: "https://instagram.com/hibat.illah",
  };

  return (
    <ul className="rounded-lg border border-grey-dark p-4 space-y-4">
      {Object.entries(info).map(([key, item], index) => (
        <li key={index}>
          <div className="text-grey-dark text-sm capitalize">{key}</div>
          {item.includes("Riau") ? (
            <div className="text-primary font-semibold">{item}</div>
          ) : (
            <a href={item.includes('pcr') ? `mailto:${item}` : item} target="_blank" rel="noopener noreferrer">
              <div className="text-primary font-semibold flex gap-2 items-center">
                {item.replace("https://", "")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Bio;
