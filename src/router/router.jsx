import { createBrowserRouter } from "react-router";
import App from "../App";
import ShowUser from "../components/ShowUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/users",
    element: <ShowUser/>,
  },
]);

export default router;