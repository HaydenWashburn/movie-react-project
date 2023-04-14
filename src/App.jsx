import "./App.css";
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import GetTrending from './Pages/TrendingPage'

function App() {
  return (
    <div>
      <BrowserRouter>
 <Routes>
      <Route path = "/home" element = {<HomePage />} />
      <Route path = "/trending" element = {<GetTrending />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
