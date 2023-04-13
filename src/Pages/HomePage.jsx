// create Home Page with a list of movies/images  rendered

function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <div class="#9e9e9e grey nav-wrapper">
            <a href="#!" class="brand-logo center">
              Home Of The Movies
            </a>
            <ul class="#9e9e9e grey left hide-on-med-and-down">
              <li>
                <a href="home">Home</a>
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
      <div>
        <body>
        </body>
      </div>
    </div>
  );
}

export default HomePage;
