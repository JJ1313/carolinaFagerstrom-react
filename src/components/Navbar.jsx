import "../assets/css/navbar.css"

export function Navbar() {
  return (
    <>
      <nav id="navbar" className="d-flex bg-black-0 align-items-center justify-content-center px-4">
        <div className="h1 ff-hand txt-white link d-block my-auto"><a className="" href="/">Carolina Fagerström</a></div>
        <ul className="d-flex g-15 ms-auto pt-1" data-collapsed="true">
          <li className=""><a className="link txt-white txt-upper fw-600 fs-08 ff-sec d-block" href="/">Inicio</a></li>
          <li><a className="link txt-white txt-upper fw-600 fs-08 d-block" href="/#about">Sobre Mi</a></li>
          <li><a className="link txt-white txt-upper fw-600 fs-08 d-block" href="/news">Noticias</a></li>
          <li id="dropdown-obras" className="link txt-white txt-upper dropdown fw-600 fs-08 pb-1"><a href="/work">Obras <span className="dropdown-icon"></span></a>
            <ul id="menu-obras" className="dropdown-menu bg-white mt-1">
              <li className="txt-black link txt-cap fw-600 fs-08 mb-1"><a href="/work?concerts">Conciertos</a></li>
              <li className="txt-black link txt-cap fw-600 fs-08"><a href="/work?multimedia">Multimedia</a></li>
            </ul>
          </li>
          <li><a className="link txt-white txt-upper fw-600 fs-08 d-block" href="#contact">Contacto</a></li>
        </ul >
        <button className="btn-burger"></button>
        <button className="link txt-white txt-upper fw-600 fs-08 ms-15 my-auto">EN</button>
      </nav >
    </>
  )
}
