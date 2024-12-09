import React from "react";
import { logo } from "../assets"; // Your app's logo
import { FaGithub } from "react-icons/fa"; // GitHub icon from react-icons

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-48 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/ruiner28", "_blank")}
          className="github_btn"
        >
          <FaGithub className="text-white text-2xl" />
        </button>
      </nav>

      <h1 className="head_text">
        <span style={{ color: "rgb(63, 0, 255)" }}>Summarize Articles with</span>{" "}
        <br className="max-md:hidden" />
        <span style={{ color: "rgb(0, 150, 255)" }}>Rapid API</span>
      </h1>
      <h2 className="desc">
        Enhance your reading experience with MindLink, an open-source tool that
        simplifies lengthy articles into concise and easy-to-understand
        summaries.
      </h2>
    </header>
  );
};

export default Hero;
