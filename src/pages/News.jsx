import { Card } from "../components/Card.jsx"
import "../assets/css/news.css"
export function News() {


  return (
    <section className="section | mt-10">
      <h2 className="ff-secondary fw-600 txt-center fs-1p6 txt-upper | mb-3">Noticias</h2>
      <div className="d-grid cols cols-md-2 cols-lg-3 g-1">
        <Card title="Conciertos de la tarde en el Parque: obras chilenas y Brahms" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="https://www.google.com" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
      </div>
    </section>
  )
}