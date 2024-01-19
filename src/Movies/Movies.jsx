import {useEffect, useState} from "react";
import {Table, Form} from "react-bootstrap";

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjY1NTlmZDM3OTlmOTQ2NmM2NGVhMGRhYTQyMDU0MyIsInN1YiI6IjU1NGI0OWM3OTI1MTQxNDY5YzAwMTk1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qJWSAVUgQylJnOnzQkRHVT6OwJpX9EmTOB5n7JcLPek'
        }
    };

    function getMovies(genre) {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=' + genre, options)
            .then(response => response.json())
            .then(json => setMovies(json.results))
            .catch(err => console.error(err));
    }

    function getGenres(genre) {
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(response => response.json())
            .then(json => setGenres(json.genres))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getGenres()
    }, []);


    return (
        <>
            <h1>Movies</h1>

            <Form.Select aria-label="Default select example" onChange={(evt) => {evt.preventDefault();getMovies(evt.currentTarget.value)}}>
                <option>Choose Genre</option>
                {genres.map(genre => <option value={genre.id} key={genre.id}>{genre.name}</option>)}
            </Form.Select>

            {!movies.length ? null : <Table striped hover>
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
            </Table>}

        </>
    );
}
