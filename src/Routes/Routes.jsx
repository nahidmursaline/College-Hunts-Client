import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import NotFound from "../NotFound";
import Admission from "../Pages/Admission/Admission";
import AdmissionDetail from "../Pages/Admission/AdmissionDetail";
import AllColleges from "../Pages/AllColleges/AllColleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyCollege from "../Pages/MyCollege/MyCollege";
import SingUp from "../Pages/SignUp/SingUp";
import PrivateRoute from "./PrivateRoute";

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
        },
        {
          path: 'admissionDetail/:id',
          element: <AdmissionDetail></AdmissionDetail>,
          loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)
        },
        {
          path: 'allColleges',
          element: <AllColleges></AllColleges>
        },
        {
          path: 'admission',
          element: <Admission></Admission>
        },
        {
          path: 'mycollege',
          element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
        }
      ]
    },
    {
      path: '/*',
      element: <NotFound></NotFound>
    }
  ]);

  export default router;