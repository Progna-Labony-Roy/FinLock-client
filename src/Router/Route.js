import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../components/ErrorElement"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default router;