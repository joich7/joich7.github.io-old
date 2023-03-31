import "../App.css";
import Footer from "../components/layout/Footer";
import Navbarfun from "../components/layout/Navbarfun";
import React from "react";
function Homepage() {
  return (
    <>
      <Navbarfun />
      <div className="app_image ">
        <div className="h-auto min-vh-100">
          <div id="start" className="row align-items-end m-auto text-white">
            <div className="col-12 text-center">
              <div className="ms-5 ">
                <h1 className="retro-text ">
                  <span className="shadowglow">Josiah Charley</span>
                </h1>

                <h2 style={{ fontFamily: "cursive" }}>Web Developer</h2>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;

//<div className="App app_image">
//<Navbarfun />
//<p>Home page </p>
//<Footer />
//</div>
