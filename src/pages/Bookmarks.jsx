import React, { useEffect, useState } from "react";

const Label = () => {
  const labels = [
    "inspirations",
    "icons",
    "illustrations",
    "fonts",
    "colors",
    "photos",
    "mockups",
    "patterns",
  ];

  const [activeLabel, setActiveLabel] = useState("inspirations");
  const handleActive = (el) => setActiveLabel(el);
  useEffect(() => {
    console.log("🚀 ~ file: Bookmarks.jsx:6 ~ activeLabel", activeLabel);
  },[activeLabel])

  return (
    <div className="flex flex-wrap gap-3">
      {labels.map((item, index) => (
        <div
          key={index}
          onClick={() => handleActive(item)}
          className={`${
            item === activeLabel
              ? "bg-primary text-white border-primary"
              : "text-primary border-grey-light bg-white"
          }
            w-fit px-5 py-2 border rounded-xl cursor-pointer select-none`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const Bookmarks = () => {
  return (
    <main className="container font-outfit">
      <div>
        <h1>Bookmarks</h1>
        <p className="mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          nam repudiandae esse incidunt velit blanditiis consectetur deleniti
          aspernatur officiis non!
        </p>
        <div className="mt-5">
          <Label />
        </div>
      </div>
      <div className="mt-12 mb-10 grid grid-cols-1 gap-6"></div>
    </main>
  );
};

export default Bookmarks;
