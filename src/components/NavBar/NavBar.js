const NavBar = ({ page, nextPage, prevPage }) => {
  return (
    <nav className="nav-bar">
      <p className="nav-bar__text">{page}</p>
      <button
        className="nav-bar__button1 btn btn-outline-primary"
        onClick={prevPage}
      >
        Prev
      </button>
      <button
        className="nav-bar__button2 btn btn-outline-primary"
        onClick={nextPage}
      >
        Next
      </button>
    </nav>
  );
};

export default NavBar;
