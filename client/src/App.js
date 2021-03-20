import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log('##movies useEffect')
    fetch("http://server:5000")
      .then((response) => {
        console.log('##res', response);
        response.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.movies)
      });
  }, []);
  return (
    <div className="App">
      <h1>This is a movies app using express</h1>
      {console.log('##movies', movies)}
    </div>
  );
}

export default App;
