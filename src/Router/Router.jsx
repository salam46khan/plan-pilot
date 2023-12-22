import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Registation/Login/Login";
import Signup from "../pages/Registation/Singup/Signup";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Beneficiary from "../pages/Beneficiary/Beneficiary";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/beneficiary',
          element: <Beneficiary></Beneficiary>
        }
      ]
    },
  ]);

export default Router;