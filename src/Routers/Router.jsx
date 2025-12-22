import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import TopCourseDetails from "../Pages/TopCourseDetails/TopCourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/courseDetails/:id",
        element: <TopCourseDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courseService/${params.id}`),
      },
    ],
  },
]);

export default router;
