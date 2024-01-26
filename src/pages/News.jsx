
import { Card } from "../components/Card.jsx"
import "../assets/css/news.css"
export function News() {


  return (
    <section className="section mt-10">
      <h2 className="mb-3 fw-600 fs-1p6 txt-upper ff-secondary txt-center">Noticias</h2>
      <div className="d-grid cols cols-md-2 cols-lg-3 g-1">
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
        <Card title="Titulo 1" link="" img="src/assets/img/piano.jpg" imgSmall="src/assets/img/piano-small.jpg"></Card>
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