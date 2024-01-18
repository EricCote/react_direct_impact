import "bootstrap/dist/css/bootstrap.css"
import Counter from "./Counter.jsx";
import {Container} from "react-bootstrap";

export default function App() {
    return <Container><Counter firstName="Matt" lastName="Leering"/></Container>
}