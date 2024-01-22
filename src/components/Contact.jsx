import "../assets/css/contact.css"
export function Contact() {
  return (
    <section id="contact" className="d-grid cols cols-md-2 mt-10 section">
      <div className="d-flex flex-column">
        <h2 className="ff-secondary fs-1p6 fw-600 txt-upper mb-1">Contacto</h2>
        <ul className="mb-2 d-flex flex-column">
          <li><a href="https://maps.app.goo.gl/v9ZXUUGpgzZPDRk7A" target="_blank" className="txt-gray link"><span></span> Con Con, Chile</a></li>
          <li><a href="tel:+56974367083" className="txt-gray link"><span></span> +56 9 7436 7083</a></li>
          <li><a href="mailto:lanierpal@gmail.com" className="txt-gray link"><span></span> lanierpal@gmail.com</a></li>
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
  )
}