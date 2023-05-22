import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import GetTrending from './Pages/TrendingPage';
import SuggestedFilms from "./Pages/SuggestedFilms";
import SingleFilmPage from "./Pages/SingleFilmPage";
import NavBar from "./Components/NavBar";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
      <header>
        <NavBar />
      </header>
 <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/trending" element = {<GetTrending />} />
      <Route path = "/suggested" element = {<SuggestedFilms />} />
      <Route path = "/movie/:id" element = {<SingleFilmPage /> } />
      <Route path = "/profile" element = {<ProfilePage /> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

