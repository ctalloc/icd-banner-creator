import "../stylesheets/layout/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">I <span class="header__title--tiltspan">can't</span> design</h1>
      <h2 className="header__subtitle">Banner creator</h2>
    </header>
  );
};

export default Header;
