import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Project from "../pages/Project";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Navbar />,
        errorElement : <Error />,
        children : [
            {
                index : true,
                element : <About />
            },
            {
                path : "/projects",
                element : <Project />
            }
        ] 
    }
])