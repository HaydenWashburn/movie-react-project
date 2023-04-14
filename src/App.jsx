import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import GetTrending from './Pages/TrendingPage';
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <BrowserRouter>
 <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/trending" element = {<GetTrending />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
