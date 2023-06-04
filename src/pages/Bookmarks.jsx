import React, { useEffect, useState } from "react";
import { BookmarkCard } from "../components";
import { bookmarks } from "../db";

const Label = ({ name, active }) => {
  return (
    <div
      className={`w-fit px-3 py-1.5 text-sm border border-grey-dark rounded-lg cursor-pointer select-none md:text-base md:px-4 ${
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
    <main className="container font-outfit lg:grid lg:grid-cols-3 lg:gap-12">
      <div className="lg:col-span-2">
        <div>
          <h1>Bookmarks</h1>
          <p className="mt-3 md:mt-4">
            I like to keep a list of interesting and useful resources which can
            then help me in completing various tasks. Here are some collections
            of bookmarks that I have saved
          </p>
          <ul className="flex flex-wrap gap-3 mt-5 md:w-3/4 md:mt-8 lg:hidden">
            {labels.map((item, i) => (
              <li key={i} onClick={() => handleActive(item)}>
                <Label name={item} active={item === activeLabel} />
              </li>
            ))}
          </ul>
        </div>
        {/* bookmarks by label */}
        <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:mt-16 lg:mt-10">
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
      </div>
      <ul className="hidden lg:h-fit lg:flex lg:flex-wrap lg:gap-3 lg:mt-12">
        {labels.map((item, i) => (
          <li key={i} onClick={() => handleActive(item)} className="h-fit">
            <Label name={item} active={item === activeLabel} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Bookmarks;
