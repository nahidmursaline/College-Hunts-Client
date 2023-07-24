import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import NotFound from "../NotFound";
import AddReviews from "../Pages/AddReviews/AddReviews";
import Admission from "../Pages/Admission/Admission";
import AdmissionDetail from "../Pages/Admission/AdmissionDetail";
import AllColleges from "../Pages/AllColleges/AllColleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import CollegeReviews from "../Pages/CollegeReviews/CollegeReviews";
import EditProfile from "../Pages/EditProfile/EditProfile";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Profile from "../Pages/Profile/Profile";
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
          element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
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
        },
        {
          path: 'reviews/:id',
          element: <AddReviews></AddReviews>,
          loader: ({params}) => fetch(`http://localhost:5000/admissions/${params.id}`)
        },
        {
          path: 'collegeReviews',
          element: <CollegeReviews></CollegeReviews>
        },
        {
          path: 'profile',
          element: <Profile></Profile>
        },
        {
          path: 'editProfile',
          element: <EditProfile></EditProfile>
        }
      ]
    },
    {
      path: '/*',
      element: <NotFound></NotFound>
    }
  ]);

  export default router;