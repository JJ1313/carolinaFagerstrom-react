import "../assets/css/navbar.css"

export function Navbar() {
  return (
    <>
      <nav id="navbar" className="d-flex bg-black">
        <div className="h1 ff-hand">Carolina Fagerstrom</div>
        <ul className="d-flex g-2">
          <li><a className="link" href="/">Inicio</a></li>
          <li><a className="link" href="/">Sobre Mi</a></li>
          <li><a className="link" href="/news">Noticias</a></li>
          <li className="link">Obras</li>
          <li><a className="link" href="/news">Contacto</a></li>
          <li className="link">EN</li>
        </ul>
      </nav>
    </>
  )
}
