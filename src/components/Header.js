const Header = () => {
  return (
    <header className="header">
      <a id="logo" href="/">
        Photon
      </a>
      <a href="https://www.pexels.com">
        Photos provided by
        <img
          src="https://images.pexels.com/lib/api/pexels-white.png"
          alt="Pexels logo"
        />
      </a>
    </header>
  );
};

export default Header;
