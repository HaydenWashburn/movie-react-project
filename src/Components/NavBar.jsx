import LoginButton from "./login";

function NavBar() {
  return (
    <div>
      <header>
        <nav className="navBar">
          <div className="#f44336 red nav-wrapper">
            <h6 className="brand-logo center">ReactFlix</h6>
            <ul className="#f44336 red left hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/trending">Trending</a>
              </li>
              <li>
                <a href="/suggested">Suggested</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;