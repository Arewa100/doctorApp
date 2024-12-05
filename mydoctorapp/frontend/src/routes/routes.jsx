import LandingPage from "../components/LandingPage"
import Login from "../auth/login"
import Signup from "../auth/signup"
import Main from "../components/Main"

const routes = [
    {
        path: "/home",
        element: <LandingPage/>
    },

    {
        path: "/login",
        element: <Login/>
    },

    {
        path: "/signup",
        element: <Signup/> 
    },
    {
        path:"/",
        element: <LandingPage/>
    },
    {
        path:"/doctor",
        element: <Main/>
    }
]

export default routes