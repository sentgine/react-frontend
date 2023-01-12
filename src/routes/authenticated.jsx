import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../page/dashboard";
import Settings from "../page/settings";

export default createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/settings",
        element: <Settings />,
    },
]);
