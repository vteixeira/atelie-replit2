export default function Header () {
  return (
    <header id="top-header" className="container pt-3">
      <h1 className="h1">Ateliê Claudio Valério Teixeira</h1>
      <p>Centro de conservação de bens culturais</p>
      <nav className="">
        <ul className="nav nav-pills">
          <li className="nav-item border-0"><a className="nav-link active border-0" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};