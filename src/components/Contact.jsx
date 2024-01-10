export function Contact() {
  return (
    <>
      <form>
        <div className="input-container">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="email" rows="10" cols="50" />
        </div>
        <button type="submit">enviar</button>
      </form>
    </>
  )
}