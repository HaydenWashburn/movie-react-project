function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <div class="#212121 grey darken-4 nav-wrapper">
            <h6 class="brand-logo center">ReactFlix</h6>
            <ul class="#212121 grey darken-4 left hide-on-med-and-down">
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