import { createBrowserRouter } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import Main from "../../layouts/Main/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Footer from "../../pages/Shared/Footer/Footer";
import SignUp from "../../pages/SignUp/SignUp";
import Services from "../../Services/Services";
import TotalServices from "../../Services/TotalServices";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('')
            },
            {
                path: '/',
                element: <Footer></Footer>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/all-services',
                element: <TotalServices></TotalServices>,
                loader: () => fetch('http://localhost:5000/all-services')
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service-details/${params.id}`),
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/add-service',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
        ]
    }
]);

export default router;