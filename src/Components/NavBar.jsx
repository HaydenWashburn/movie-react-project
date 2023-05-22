import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div>
      <header>
        <nav className="navBar">
          <div className="#f44336 red nav-wrapper">
            <h6 className="brand-logo center">ReactFlix</h6>
            <ul className="#f44336 red left hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/trending">Trending</Link>
              </li>
              <li>
                <Link to="/suggested">Suggested</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;