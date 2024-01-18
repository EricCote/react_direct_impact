import "bootstrap/dist/css/bootstrap.css"
import MyCounter from "./MyCounter.jsx";
import {Container} from "react-bootstrap";

export default function App() {
    return <Container><MyCounter firstName="Matt" lastName="Leering"/></Container>
}