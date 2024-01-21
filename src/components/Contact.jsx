import "../assets/css/contact.css"
export function Contact() {
  return (
    <div id="contact" className="d-grid cols cols-md-2 mt-10 px-4">
      <div className="d-flex flex-column">
        <h3>Contacto</h3>
        <a href="" className="txt-gray-5"><span>Ic</span> Con Con, Chile</a>
        <a href="" className="txt-gray-5"><span>Ic</span> +56 9 7436 7083</a>
        <a href="" className="txt-gray-5"><span>Ic</span> lanierpal@gmail.com</a>
      </div>
      <form className="d-grid">
        <div className="input-container">
          <input type="text" id="name" aria-label="Nombre" placeholder="Nombre" className="txt-upper fs-08 fw-500" />
        </div>
        <div className="input-container">
          <input type="email" id="email" aria-label="Correo" placeholder="Correo" className="txt-upper " />
        </div>
        <div className="input-container">
          <input type="text" id="subject" aria-label="Asunto" placeholder="Asunto" className="txt-upper " />
        </div>
        <div className="input-container">
          <textarea id="message" name="email" aria-label="Mensaje" placeholder="Mensaje" className="txt-upper " />
        </div>
        <button type="submit" className="btn txt-upper">enviar mensaje</button>
      </form>
    </div>
  )
}