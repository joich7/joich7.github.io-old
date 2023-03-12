import React from "react";
import logo from "../logo.svg";
export default function About() {
  return (
    <div id="about">
      <div className="row " style={{ paddingTop: "2vh", margin: 0 }}>
        <div className="col text-center align-items-center d-flex  ">
          Contact info
        </div>
        <div className="col-lg-8 col-12 d-flex justify-content-center align-items-center h-auto">
          {/*removed zig class */}
          <div className="text-center">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              tenetur reprehenderit eos porro nam repellendus corrupti
              consectetur laborum? Veniam assumenda dicta deleniti quo quos nam
              quisquam voluptate esse corporis alias.
            </p>
            <ul>
              <li>Fixing up old vehicles</li>
              <li>Playing video games</li>
              <li>playing with my dog</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ paddingTop: "2vh", margin: 0, paddingBottom: "2vh" }}
      >
        <div className=" col-lg-8 col-12 d-flex justify-content-center align-items-center h-auto">
          {/* removed zag class */}
          <div className="text-center">
            <h2>Toolbelt</h2>
            <p> I'm currently proficient with:</p>
            <dl>
              <dt>HTML</dt>
              <dl>The Skeleton of a webpage</dl>
              <dt>CSS</dt>
              <dl>The Makeup of the Skeleton</dl>
              <dt>Javascript</dt>
              <dl>The Brains of the Skeleton</dl>
              <dt>React</dt>
              <dl>A Javascript Library for building user interfaces</dl>
            </dl>
          </div>
        </div>
        <div className="d-flex col justify-content-center ">
          <img className="h-50" src={logo} alt="ZT Logo" />
        </div>
      </div>
    </div>
  );
}
