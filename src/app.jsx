import {Fragment} from "react";

export default function App({firstName, lastName}) {
    return (
        <Fragment>
            <h1 style={{color: 'red'}}>
                Hello {firstName} {lastName}
            </h1>
            <p>
                It is {new Date().toLocaleTimeString()}
            </p>
        </Fragment>
    )
}