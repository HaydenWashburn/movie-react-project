import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import GetTrending from './Pages/TrendingPage';
import SuggestedFilms from "./Pages/SuggestedFilms";
import SingleFilmPage from "./Pages/SingleFilmPage";
import LoginButton from "./Pages/LoginPage";
import NavBar from "./Components/NavBar";
import Profile from "./Pages/ProfilePage";
function App() {
  return (
    <div className="layout">
      <header>
        <NavBar />
      </header>
      <BrowserRouter>
 <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/trending" element = {<GetTrending />} />
      <Route path = "/suggested" element = {<SuggestedFilms />} />
      <Route path = "/movie/:id" element = {<SingleFilmPage /> } />
      <Route path = "/login" element = {<LoginButton /> } />
      <Route path="/profile" element = {<Profile /> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
