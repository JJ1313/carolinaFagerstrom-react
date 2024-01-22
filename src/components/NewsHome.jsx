import { Card } from "./Card"
import "../assets/css/news.css"

export function NewsHome() {

  return (
    <section id="news" className="section mt-10 d-grid justify-content-center align-items-center">
      <h2 className="txt-center mb-3 fw-600 fs-1p6 txt-upper ff-secondary">Noticias</h2>
      <div className="d-grid cols cols-md-2 cols-lg-3 g-2p5">
        <Card title="Titulo 1" img="src\assets\img\piano.jpg" link=""></Card>
        <Card title="Titulo 2" img="src\assets\img\piano.jpg" link=""></Card>
        <Card title="Titulo 3" img="src\assets\img\piano.jpg" link=""></Card>
      </div>
      <a href="/news" className="btn mt-2">Ver más</a>
    </section>
  )
}