function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <div class="#f44336 red nav-wrapper">
            <h6 class="brand-logo center">ReactFlix</h6>
            <ul class="#f44336 red left hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="trending">Trending</a>
              </li>
              <li>
                <a href="suggested">Suggested</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;