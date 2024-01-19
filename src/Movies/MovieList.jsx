import {Table} from "react-bootstrap";

export default function MovieList({movies}) {
    return (
        <Table striped hover>
            <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            {movies.map((movie) => (
                <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.release_date}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}