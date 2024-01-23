import "../assets/css/footer.css"

export function Footer() {
  return (
    <>
      <footer id="footer" className="d-grid cols cols-md-2 cols-lg-3 bg-black-0 pt-3p75 txt-white mt-5 justify-content-center px-4 pb-3 g-2">
        <h2 className="fs-3 ff-hand txt-center"><a href="/" className="link">Carolina Fagerström</a></h2>
        <div className="mx-auto">
          <h3 className="txt-upper fw-700 pb-0p5">Sitio</h3>
          <ul className="navbar">
            <li className="py-0p5"><a href="/" className="link fw-300 "><div>Inicio</div></a></li>
            <li className="py-0p5"><a href="/news" className="link fw-300 "><div>Noticias</div></a></li>
            <li className="py-0p5"><a href="/work" className="link fw-300 "><div>Obras</div></a></li>
          </ul>
        </div>
        <div className="mx-auto">
          <h3 className="txt-upper fw-700 mb-1 pb-0p5">Contáctame</h3>
          <ul className="contact-info">
            <li><a href="tel:+56974367083" className="link fw-300 d-flex flex-row align-items-center g-0p5"><svg width="16" height="16"><use href="#icon-phone"></use></svg> +56 9 7436 7083</a></li>
            <li><a href="mailto:lanierpal@gmail.com" className="link fw-300 d-flex flex-row  align-items-center g-0p5"><svg width="16" height="16"><use href="#icon-mail"></use></svg>   lanierpal@gmail.com</a></li>
          </ul>
          <ul className="social-icons mt-1">
            <li><a href="https://www.youtube.com/@carolinafagerstrom" target="_blank"><svg width="16" height="16"><use href="#icon-youtube"></use></svg></a></li>
          </ul>
        </div>
      </footer>
      <svg className="d-none" viewBox="0 0 16 16">
        <g id="icon-youtube">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
        </g>
        <g id="icon-phone">
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
        </g>
        <g id="icon-mail">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </g>
      </svg>
    </>
  )
}