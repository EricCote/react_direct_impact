
import "bootstrap/dist/css/bootstrap.css"
import {Container} from "react-bootstrap";
import MyButton from "./MyButton.jsx";

export default function Counter({firstName, lastName}) {
    return (
        <Container>
            <h1 style={{color: 'red'}}>
                Hello {firstName} {lastName}
            </h1>
            <p>
                It is {new Date().toLocaleTimeString()}
            </p>
            <MyButton/>
        </Container>
    )
}