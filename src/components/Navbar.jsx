import "../assets/css/navbar.css"

export function Navbar() {
  return (
    <>
      <nav id="navbar" className="d-flex bg-black-0 align-items-center justify-content-start px-4">
        <div className="h1 ff-hand txt-white link"><a href="">Carolina Fagerström</a></div>
        <ul className="d-flex g-15 ms-auto">
          <li><a className="link txt-white txt-upper fw-600 fs-08 ff-sec" href="/">Inicio</a></li>
          <li><a className="link txt-white txt-upper fw-600 fs-08" href="/">Sobre Mi</a></li>
          <li><a className="link txt-white txt-upper fw-600 fs-08" href="/news">Noticias</a></li>
          <li id="dropdown-obras" className="link txt-white txt-upper dropdown fw-600 fs-08">Obras
            <ul id="menu-obras" className="dropdown-menu bg-white p-1 mt-1">
              <li className="txt-black link txt-cap fw-600 fs-08 mb-1">Conciertos</li>
              <li className="txt-black link txt-cap fw-600 fs-08">Multimedia</li>
            </ul>
          </li>
          <li><a className="link txt-white txt-upper fw-600 fs-08" href="/news">Contacto</a></li>
        </ul>
        <a className="link txt-white txt-upper fw-600 fs-08 ms-15">EN</a>
      </nav>
    </>
  )
}
