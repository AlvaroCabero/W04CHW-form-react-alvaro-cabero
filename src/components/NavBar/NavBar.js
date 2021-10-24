const NavBar = ({ page, nextPage, prevPage }) => {
  return (
    <nav className="nav-bar">
      <button
        className={`nav-bar__button1 btn btn-outline-primary${
          page === 0 ? " off" : ""
        }`}
        onClick={prevPage}
      >
        Prev
      </button>
      <button
        className={`nav-bar__button2 btn btn-outline-primary${
          page === 2 ? " off" : ""
        }`}
        onClick={nextPage}
      >
        Next
      </button>
      <p className="nav-bar__text"> Page: {page}</p>
    </nav>
  );
};

export default NavBar;
