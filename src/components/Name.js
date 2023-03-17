import React from "react";
import "../css/style.css";

let Name = () => {
  return (
    <div
      className="letterContainer"
      onClick={() =>
        window.open("https://kdhminime.github.io/portfolio_website/", "_self")
      }
    >
      <h1 className="letterD">D</h1>
      <h1 className="letterO">o</h1>
      <h1 className="letterH">h</h1>
      <h1 className="letterY">y</h1>
      <h1 className="letterU">u</h1>
      <h1 className="letterN">n</h1>
    </div>
  );
};

export default Name;
