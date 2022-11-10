import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutDetails from "../../Pages/About/AboutDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <AboutDetails></AboutDetails>
            }
        ]
    }
]);


export default router;