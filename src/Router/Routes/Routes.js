import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutDetails from "../../Pages/About/AboutDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Register from "../../Pages/Register/Register";
import AddService from "../../Pages/AddService/AddService";
import MyReview from "../../Pages/MyReview/MyReview";
import DetailsContainer from "../../Pages/DetailsContainer/DetailsContainer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => {
                    return fetch('http://localhost:5000/services');
                },
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => {
                    return fetch('http://localhost:5000/services/all');
                },
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
                element: <DetailsContainer></DetailsContainer>
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
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            }
        ]
    }
]);


export default router;