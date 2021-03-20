import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [release, setRelease] = useState("");
  useEffect(() => {
    (async () => {
      await fetchMovies();
    })();
  }, []);

  const submitMovie = async (e) => {
    e.preventDefault();
    const newMovie = await axios.post(
      "http://localhost:5000/api/values/movies",
      {
        name: movie,
        release
      }
    );
    const {
      data: { data }
    } = newMovie;
    setMovies([...movies, data.movie]);
  };

  const fetchMovies = async () => {
    const response = await axios.get("http://localhost:5000/api/values/movies");
    if (
      response.data &&
      response.data.data &&
      response.data.status === "success"
    ) {
      const movies = response.data.data.movies.map(({ name, release }) => ({
        name,
        release
      }));
      setMovies(movies);
    }
  };

  return (
    <div className="App">
      <h1>This is a movies app using express</h1>
      <form onSubmit={submitMovie}>
        <label>Create a movie: </label>
        <input
          name="name"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <label>Enter year: </label>
        <input
          name="year"
          value={release}
          onChange={(e) => setRelease(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="moviecontainer">
        {movies.length &&
          movies.map((movie) => {
            return (
              <div key={movie._id}>
                <span className="movieitem">{movie.name}</span>
                <span className="movieitem">{movie.release}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
