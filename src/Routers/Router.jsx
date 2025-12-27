import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import TopCourseDetails from "../Pages/TopCourseDetails/TopCourseDetails";
import MyCourse from "../Pages/MyCourse/MyCourse";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/myCourse",
        element: <MyCourse />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
