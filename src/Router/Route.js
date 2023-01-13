import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/',
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;