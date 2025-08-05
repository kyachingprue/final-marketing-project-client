import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Dashboard/Dashboard";
import MyProduct from "../Dashboard/User/MyProduct";
import UserHome from "../Dashboard/User/UserHome";
import Reservation from "../Dashboard/User/Reservation";
import Payment from "../Dashboard/User/Payment";
import AddReview from "../Dashboard/User/AddReview";
import MyBooking from "../Dashboard/User/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <PrivateRouter> <About></About></PrivateRouter>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/userHome',
        element: <UserHome></UserHome>
      },
      {
        path: '/dashboard/product',
        element: <MyProduct></MyProduct>
      },
      {
        path: '/dashboard/reservation',
        element: <Reservation></Reservation>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/addReview',
        element: <AddReview></AddReview>
      },
      {
        path: '/dashboard/myBooking',
        element: <MyBooking></MyBooking>
      }
    ]
  }
]);

export default router;