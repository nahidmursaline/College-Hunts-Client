import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SignUp/SingUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SingUp></SingUp>
        },
        {
          path: 'detail/:id',
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)
        }
      ]
    },
  ]);

  export default router;