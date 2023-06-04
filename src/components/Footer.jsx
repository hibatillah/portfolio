import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 text-center text-grey-dark pb-8 lg:flex lg:justify-end lg:gap-8 lg:px-12 lg:pb-4">
      <a
        href="http://github.com/sponsors/hibatillah"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block hover:text-primary"
      >
        Support
      </a>
      <div>{year} &copy; Hibatillah</div>
    </footer>
  );
};

export default Footer;
