
const authors=[
    {id: 1, name: 'Matt'},
    {id: 2, name: 'Alan'},
    {id: 3, name: 'Xavier'},
    {id: 4, name: 'The Rock'},
]

export default function About() {
    return (
        <>
            <h1>About Page</h1>
            <p>Authors: </p><ul>{authors.map(author => (<li key={author.id}>{author.name}</li>))}</ul>
        </>
    )
}