import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [list, setList] = useState([]);

  function getMovies() {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a2688357emshb550473fd663c16p1177c1jsnd359e5dd96c2',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <header className="App-header">
        <h1>Movie Suggestion Generator</h1>
      </header>
    </div>
  );
}

export default App;

