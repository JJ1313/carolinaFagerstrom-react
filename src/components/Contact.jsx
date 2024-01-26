import "../assets/css/contact.css"
export function Contact() {
  return (
    <>
      <section id="contact" className="d-grid cols cols-md-2 mt-10 section">
        <div className="d-flex flex-column">
          <h2 className="ff-secondary fs-1p6 fw-600 txt-upper mb-1">Contacto</h2>
          <ul className="mb-2">
            <li><a href="https://maps.app.goo.gl/v9ZXUUGpgzZPDRk7A" target="_blank" className="txt-gray link d-flex align-items-center g-0p5"><svg width="16" height="16"><use href="#icon-location"></use></svg> Con Con, Chile</a></li>
            <li><a href="tel:+56974367083" className="txt-gray link d-flex align-items-center g-0p5"><svg width="16" height="16"><use href="#icon-phone"></use></svg> +56 9 7436 7083</a></li>
            <li><a href="mailto:lanierpal@gmail.com" className="txt-gray link d-flex align-items-center g-0p5"><svg width="16" height="16"><use href="#icon-mail"></use></svg> lanierpal@gmail.com</a></li>
          </ul>
        </div>
        <form method="POST">
          <div className="form-container d-grid cols-2 g-row-1 g-col-1p5">
            <div className="input-container">
              <input type="text" id="name" aria-label="Nombre" placeholder="Nombre" className="txt-upper fs-0p8 fw-500 ff-terciary" />
            </div>
            <div className="input-container">
              <input type="email" id="email" aria-label="Correo" placeholder="Correo" className="txt-upper fs-0p8 ff-terciary" />
            </div>
            <div className="input-container">
              <input type="text" id="subject" aria-label="Asunto" placeholder="Asunto" className="txt-upper fs-0p8 ff-terciary" />
            </div>
            <div className="input-container">
              <textarea id="message" name="email" aria-label="Mensaje" placeholder="Mensaje" className="txt-upper fs-0p8 ff-terciary" />
            </div>
          </div>
          <button type="submit" className="btn mt-1">enviar mensaje</button>
        </form>
      </section>
      <svg className="d-none" viewBox="0 0 16 16">
        <g id="icon-location">
          <path d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
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