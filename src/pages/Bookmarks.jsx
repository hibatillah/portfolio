import React, { useEffect, useState } from "react";
import { BookmarkCard } from "../components";
import { bookmarks } from "../db";

const Label = ({ name, active }) => {
  return (
    <div
      className={`w-fit px-3 py-1.5 text-sm border border-grey-dark rounded-lg cursor-pointer select-none ${
        active
          ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
          : "text-primary border-grey-dark bg-white"
      }`}
    >
      {name}
    </div>
  );
};

const Bookmarks = () => {
  useEffect(() => {
    document.title = "Hibatillah's Bookmarks";
  }, []);

  const labels = [
    "inspirations",
    "icons",
    "illustrations",
    "patterns",
    "fonts",
    "colors",
    "photos",
    "mockups",
    "tools",
    "plugins",
    "blogs",
    "quotes",
  ];

  // active label
  const [activeLabel, setActiveLabel] = useState("inspirations");
  const handleActive = (el) => setActiveLabel(el);
  useEffect(() => {
    console.log("🚀 ~ file: Bookmarks.jsx:6 ~ activeLabel", activeLabel);
  }, [activeLabel]);

  // filter bookmarks by label
  const filteredBookmarks = bookmarks.filter((item) =>
    item.label.find((el) => el === activeLabel)
  );

  return (
    <main className="container font-outfit">
      <div>
        <h1>Bookmarks</h1>
        <p className="mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          nam repudiandae esse incidunt velit blanditiis consectetur deleniti
          aspernatur officiis non!
        </p>
        {/* label */}
        <ul className="flex flex-wrap gap-3 mt-5">
          {labels.map((item, i) => (
            <li key={i} onClick={() => handleActive(item)}>
              <Label name={item} active={item === activeLabel} />
            </li>
          ))}
        </ul>
      </div>
      {/* bookmarks by label */}
      <div className="mt-12 mb-10 grid grid-cols-1 gap-5">
        {filteredBookmarks?.map((item, i) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <BookmarkCard
              img={item.icon}
              title={item.title}
              label={item.label}
            />
          </a>
        ))}
      </div>
    </main>
  );
};

export default Bookmarks;
