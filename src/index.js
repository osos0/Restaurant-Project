import React from "react";
import ReactDOM from "react-dom";
import App from "./componant/App";
import Aboutme from "./pages/2About_me_Page";
import Explore from "./pages/3Explore_Foods_Page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        {" "}
        <h1>Oops!</h1>
        <h6>Sorry, an unexpected error has occurred.</h6>
      </div>
    ),
  },
  {
    path: "/aboutme",
    element: <Aboutme />,
    errorElement: (
      <div>
        {" "}
        <h1>Oops!</h1>
        <h6>Sorry, an unexpected error has occurred.</h6>
      </div>
    ),
  },
  {
    path: "/explore",
    element: <Explore />,
    errorElement: (
      <div>
        {" "}
        <h1>Oops!</h1>
        <h6>Sorry, an unexpected error has occurred.</h6>
      </div>
    ),
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
