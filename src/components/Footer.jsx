import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 text-center text-grey-dark pb-8 lg:flex lg:gap-6 lg:px-12 lg:pb-4">
      <div>{year} &copy; Hibatillah</div>
      <a
        href="http://github.com/sponsors/hibatillah"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block hover:text-primary hover:font-medium"
      >
        Support
      </a>
    </footer>
  );
};

export default Footer;
