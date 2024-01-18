import "bootstrap/dist/css/bootstrap.css"
import Counter from "./Counter/Counter.jsx";
import {Container} from "react-bootstrap";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Menu from "./Menu.jsx";
import {useEffect, useState} from "react";

// DOM should never be called from render
// DOM should only be called from effect
// Effects are often run with a dependency array
// The effect is called ONLY if at least one item from the array changes

export default function App() {
    const [page, setPage] = useState(location.hash)

    useEffect(() => {
        window.addEventListener('hashchange', hashchangeHandler)
    }, []);

    useEffect(() => {
        document.querySelector('h1').style.color='red'
        console.log(`moving to ${page}`)
        return () => {
            console.log(`moving out of ${page} (previous instance of page)`)
        }
    }, [page]);

    function hashchangeHandler() {
        setPage(location.hash)
    }


    return (
        <>
            <Menu/>
            <Container className='mt-3'>
                <Routing route={page}/>
            </Container>
        </>
    )

}

function Routing({route}) {
    switch (route) {
        case '#':
        case '#home':
            return <Home/>
        case '#about':
            return <About/>
        case '#counter':
            return <Counter firstName="Matt" lastName="Leering"/>
    }
}