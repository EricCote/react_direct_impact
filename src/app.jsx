
export default function App({firstName, lastName}) {
    return (
        <>
            <h1 style={{color: 'red'}}>
                Hello {firstName} {lastName}
            </h1>
            <p>
                It is {new Date().toLocaleTimeString()}
            </p>
        </>
    )
}