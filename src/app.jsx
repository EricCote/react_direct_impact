import "bootstrap/dist/css/bootstrap.css"
import Counter from "./Counter/Counter.jsx";
import {Container} from "react-bootstrap";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Menu from "./Menu.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// DOM should never be called from render
// DOM should only be called from effect
// Effects are often run with a dependency array
// The effect is called ONLY if at least one item from the array changes

export default function App() {

    return (
        <RouterProvider router={router}>
            <Menu/>
            <Container className='mt-3'>

            </Container>
        </RouterProvider>
    )

}

let router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/counter",
        element: <Counter firstName="Matt" lastName="Leering"/>
    },
    {
        element: <p>Page Cannot Be Found</p>
    },
])