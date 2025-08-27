import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import Navbar from "../components/Navbar";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Navbar />,
        errorElement : <Error /> 
    }
])