import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
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
            // {
            //     path: '/checkout/:id',
            //     element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
            //     loader: ({ params }) => fetch(`/${params.id}`)
            // },
            {
                path: '/orders',
                element: <PrivateRoutes></PrivateRoutes>
            }
        ]
    }
]);

export default router;