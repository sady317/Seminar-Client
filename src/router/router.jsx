import { createBrowserRouter } from "react-router";
import App from "../App";
import ShowUser from "../components/ShowUser";
import UpdateName from "../components/UpdateName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/users",
    element: <ShowUser/>,
  },
  {
    path: "/user/:id",
    element: <UpdateName/>,
    loader:({params})=>fetch(`http://localhost:2703/seminar/${params.id}`)
  },
]);

export default router;