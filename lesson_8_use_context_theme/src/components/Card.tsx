import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

const Card = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Card must be used within a ThemeProvider");
  const { theme, toggleTheme } = context;
  return (
    <div
      className={`w=[20rem] p-[2rem] ${
        theme == "light" ? "bg-white" : "bg-teal-900"
      }`}
    >
      <h1
        className={`text-teal-300 ${
          theme == "light" ? "text-black" : "text-white"
        }`}
      >
        Theme Card
      </h1>
      <p className={`${theme == "light" ? "text-black" : "text-white"}`}>
        lorem ipsum dolor sit amet consentetur adipisicing elit facilis cumque
        numquam exercitationem quae vitae vel veritatis similique illym repellat
        itaque iure voluptates ut cum facere a praesentium eveniet ut itaque.
      </p>
      <button
        className="bg-teal-300 p-2 rounded-full text-white mt-[2rem]"
        onClick={toggleTheme}
      >
        {theme == 'light' ? "Switch to Dark Mode" : "Switch to Light mode"}
      </button>
    </div>
  );
};

export default Card;
