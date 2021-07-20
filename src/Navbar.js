function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">My Library</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="button">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
