import "./App.css";
import { useState, useEffect} from 'react';


function App() {
  let [list, setList] = useState([]);


  function getFilms(){

    fetch('https://api.themoviedb.org/3/movie/550?api_key=b6ad3a4bb91a1af81fa26314c346bd24')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  

  return (<header className="App-header">
<h1>Movie Suggestion Generator</h1>
  </header>
  );
}

export default App;
