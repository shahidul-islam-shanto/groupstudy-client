import { createBrowserRouter } from "react-router-dom";
import Assignments from "../Assignments/Assignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Assignments />,
    children: [
      {
        path: "/",
        element: <Assignments />,
      },
    ],
  },
]);

export default router;
