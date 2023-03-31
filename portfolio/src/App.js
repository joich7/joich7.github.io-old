import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";

import Homepage from "./pages/Homepage";
import BlogPosts from "./pages/BlogPosts";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blogposts",
      element: <BlogPosts />,
    },
    {
      path: "/blogposts"
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//<div className="App app_image">
//<Navbarfun />
//<p>Home page </p>
//<Footer />
//</div>
