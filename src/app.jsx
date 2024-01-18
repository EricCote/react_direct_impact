import "bootstrap/dist/css/bootstrap.css"
import Counter from "./Counter/Counter.jsx";
import {Container} from "react-bootstrap";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Menu from "./Menu.jsx";

export default function App() {
    return <>
            <Menu/>
            <Container className='mt-3'>
                <Routing route={location.hash}/>
            </Container>
        </>

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