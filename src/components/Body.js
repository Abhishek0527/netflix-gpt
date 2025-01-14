import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse/>
    },
])
const Body = () => {
    return (
        <div>
            <RouterProvider router={appRoute} />
        </div>
    )
}

export default Body;