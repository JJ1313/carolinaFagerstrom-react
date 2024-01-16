import "../assets/css/navbar.css"

export function Navbar() {
  return (
    <>
      <nav id="navbar" className="d-flex bg-black-0 align-items-center justify-content-between px-4">
        <div className="h1 ff-hand txt-white link"><a href="">Carolina Fagerström</a></div>
        <ul className="d-flex g-15">
          <li><a className="link txt-white txt-upper" href="/">Inicio</a></li>
          <li><a className="link txt-white txt-upper" href="/">Sobre Mi</a></li>
          <li><a className="link txt-white txt-upper" href="/news">Noticias</a></li>
          <li id="dropdown-obras" className="link txt-white txt-upper dropdown">Obras</li>
          <li><a className="link txt-white txt-upper" href="/news">Contacto</a></li>
          <li className="link txt-white txt-upper">EN</li>
        </ul>
        <ul id="menu-obras" className="dropdown-menu" anchor="#dropdown-obras">
          <li>Conciertos</li>
          <li>Multimedia</li>
        </ul>
      </nav>
    </>
  )
}
