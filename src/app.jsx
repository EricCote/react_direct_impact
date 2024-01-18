import "bootstrap/dist/css/bootstrap.css"
import Counter from "./Counter/Counter.jsx";
import {Container} from "react-bootstrap";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Menu from "./Menu.jsx";
import {useEffect, useState} from "react";

export default function App() {
    const [page, setPage] = useState(location.hash)

    useEffect(() => {
        window.addEventListener('hashchange', hashchangeHandler)
    }, []);

    useEffect(() => {
        document.querySelector('h1').style.color='red'
        console.log(`moving to ${page}`)
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