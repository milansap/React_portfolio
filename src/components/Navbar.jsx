import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const activeNav = (page) => {
    setActive(page);
  };

  return (
    <div className="flex justify-evenly p-10 ">
      <div className=" ">MI LAN</div>
      <div className="flex gap-4">
        <ul className="flex justify-around gap-10 ">
          <li
            onClick={() => activeNav("home")}
            className={`relative group ${
              active === "home" ? "text-purple-800" : ""
            }`}
          >
            <Link to="/"> Home</Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                active === "home" ? "scale-x-100" : ""
              }`}
            ></span>
          </li>
          <li
            onClick={() => activeNav("about")}
            className={`relative group ${
              active === "about" ? "text-purple-800" : ""
            }`}
          >
            <Link to="about"> About </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                active === "about" ? "scale-x-100" : ""
              }`}
            ></span>
          </li>
          <li
            onClick={() => activeNav("skill")}
            className={`relative group ${
              active === "skill" ? "text-purple-800" : ""
            }`}
          >
            <Link to="/skill"> Skills</Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                active === "skill" ? "scale-x-100" : ""
              }`}
            ></span>{" "}
          </li>
          <li
            onClick={() => activeNav("qualification")}
            className={`relative group ${
              active === "qualification" ? "text-purple-800" : ""
            }`}
          >
            <Link to="/qualification"> Qualification</Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                active === "qualification" ? "scale-x-100" : ""
              }`}
            ></span>{" "}
          </li>
          <li
            onClick={() => activeNav("experience")}
            className={`relative group ${
              active === "experience" ? "text-purple-800" : ""
            }`}
          >
            <Link to="/experience"> Experience</Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                active === "experience" ? "scale-x-100" : ""
              }`}
            ></span>{" "}
          </li>
          <li
            onClick={() => activeNav("contact")}
            className={`relative group ${
              active === "contact" ? "text-purple-800" : ""
            }`}
          >
            <Link to="/contact"> Contact-Me</Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-0.5 bg-purple-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                active === "contact" ? "scale-x-100" : ""
              }`}
            ></span>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={toggleTheme}>
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
