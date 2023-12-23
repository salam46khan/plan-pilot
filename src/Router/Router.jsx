import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Registation/Login/Login";
import Signup from "../pages/Registation/Singup/Signup";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Beneficiary from "../pages/Beneficiary/Beneficiary";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Layout/Dashboard";
import DashHome from "../pages/Dashboard/DashHome";
import AllTask from "../pages/Dashboard/AllTask";
import TaskUpdate from "../pages/Dashboard/TaskUpdate";
import ToDo from "../pages/Dashboard/ToDo";

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
        element: <PrivateRouter><Beneficiary></Beneficiary></PrivateRouter>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'home',
        element: <PrivateRouter><DashHome></DashHome></PrivateRouter>
      },
      {
        path: 'task',
        element: <PrivateRouter><AllTask></AllTask></PrivateRouter>
      },
      {
        path: 'todo',
        element: <PrivateRouter><ToDo></ToDo></PrivateRouter>
      },
      {
        path: 'update/:id',
        element: <PrivateRouter><TaskUpdate></TaskUpdate></PrivateRouter>
      }
      
    ]
  }
]);

export default Router;