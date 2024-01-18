import "bootstrap/dist/css/bootstrap.css"
import Counter from "./Counter/Counter.jsx";
import {Container} from "react-bootstrap";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Menu from "./Menu.jsx";
import {useState} from "react";

export default function App() {

    const [page, setPage] = useState(location.hash)

    window.addEventListener('hashchange', (evt) => {
        setPage(location.hash)
    })


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