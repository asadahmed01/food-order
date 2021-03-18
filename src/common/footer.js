import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-center bg-gray-200 py-7 md:py-10 text-gray-500 positon-sticky">
      <a href="https://github.com/asadahmed01" className="hover:text-gray-800">
        <p>&copy; Assad Ahmed {new Date().getFullYear()}</p>
      </a>
    </div>
  );
}

export default Footer;
