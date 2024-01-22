import "../assets/css/footer.css"

export function Footer() {
  return (
    <>
      <footer id="footer" className="d-flex bg-black-0 pt-3p75 txt-white mt-5">
        <h2 className="h1 ff-hand"><a href="/" className="link">Carolina Fagerström</a></h2>
        <div>
          <h3 className="txt-upper fs-0p8 fw-700">Contacto</h3>
          <ul className="navbar">
            <li><a href="/" className="link fw-300">Inicio</a></li>
            <li><a href="/news" className="link fw-300">Noticias</a></li>
            <li><a href="/work" className="link fw-300">Obras</a></li>
          </ul>
        </div>
        <div>
          <h3 className="txt-upper fs-0p8 fw-700">Contáctame</h3>
          <ul>
            <li><a href="tel:+56974367083" className="link fw-300">+56 9 7436 7083</a></li>
            <li><a href="mailto:lanierpal@gmail.com" className="link fw-300">lanierpal@gmail.com</a></li>
          </ul>
          <ul>
            <li><a href="http://">YT</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}