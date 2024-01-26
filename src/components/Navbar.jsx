import "../assets/css/navbar.css"
import { useState } from "react"

export function Navbar() {
  const [path, setPath] = useState(window.location.pathname)
  return (
    <nav id="navbar" className="bg-black-0 px-2 px-sm px-lg-4">
      <div className="h1 link | d-block | ff-hand txt-white my-auto"><a href="/">Carolina</a></div>
      <ul className="g-1p5 ms-auto pt-1" data-collapsed="true">
        <li><a className={"link | d-block | txt-white txt-upper fw-600 fs-0p8 " + ((path === "/") ? 'active' : null)} href="/">Inicio</a></li>
        <li><a className="link | d-block | txt-white txt-upper fw-600 fs-0p8 " href="/#about">Sobre Mi</a></li>
        <li><a className={"link | d-block |  txt-white txt-upper fw-600 fs-0p8 " + ((path === "/news") ? 'active' : null)} href="/news">Noticias</a></li>
        <li id="dropdown-obras" className="link dropdown | txt-white txt-upper fw-600 fs-0p8 | pb-1"><a className={((path === "/work") ? 'active' : null)} href="/work">Obras <span className="dropdown-icon"></span></a>
          <ul id="menu-obras" className="dropdown-menu | bg-white | mt-1">
            <li className="link | txt-black txt-cap fw-600 fs-0p8 | mb-1"><a href="/work?type=concerts">Conciertos</a></li>
            <li className="link | txt-black txt-cap fw-600 fs-0p8"><a href="/work?type=multimedia">Multimedia</a></li>
          </ul>
        </li>
        <li><a className="link | d-block | txt-white txt-upper fw-600 fs-0p8 " href="#contact">Contacto</a></li>
      </ul >
      <button className="btn-burger"></button>
      <button className="link | txt-white txt-upper fw-600 fs-0p8 | ms-0p5 ms-md-1p5 my-auto">EN</button>
    </nav >
  )
}