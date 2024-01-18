import MyButton from "./MyButton.jsx";
import "bootstrap/dist/css/bootstrap.css"
import {Container} from "react-bootstrap";

export default function App({firstName, lastName}) {
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