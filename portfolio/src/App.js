import "./App.css";
import Footer from "./components/layout/Footer";

import Navbarfun from "./components/layout/Navbarfun";

function App() {
  return (
    <>
      <Navbarfun />
      <div className="app_image ">
        <div className="h-auto min-vh-100">
          <div id="start" className="row align-items-end m-auto text-white">
            <div className="col-12 text-center">
              <div className="ms-5 ">
                <h1 className="">Josiah Charley</h1>

                <h2>Web Developer</h2>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

//<div className="App app_image">
//<Navbarfun />
//<p>Home page </p>
//<Footer />
//</div>
