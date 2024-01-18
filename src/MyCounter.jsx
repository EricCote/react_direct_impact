
import "bootstrap/dist/css/bootstrap.css"
import MyButton from "./MyButton.jsx";

export default function MyCounter({firstName, lastName}) {
    return (
        <>
            <h1 style={{color: 'red'}}>
                Hello {firstName} {lastName}
            </h1>
            <p>
                It is {new Date().toLocaleTimeString()}
            </p>
            <MyButton/>
        </>
    )
}