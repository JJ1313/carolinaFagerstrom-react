import "../assets/css/about.css"
export function About() {

  return (
    <>
      <section id="about" className="section d-grid cols cols-lg-2 pt-625">
        <div className="d-none d-lg-grid align-items-center justify-content-center">
          <div className="img-wrapper">
            <img className="about-img" src="src\assets\img\piano.jpg" />
          </div>
        </div>
        <div>
          <h3 className="fs-16 ff-secondary txt-gray-5 my-15">Pianista y compositora Viñamarina, estudió en el Instituto de Música de la Pontificia Universidad Católica de Valparaíso la cátedra de piano clásico</h3>
          <p className="fs-09 fw-300 txt-gray-5">Especializada en Música Docta, ha interpretado en diferentes escenarios de la V Región, con un variado repertorio de obras para piano, interpretando a Wolfgang Amadeus Mozart en su 250 aniversario de muerte y Franz Schubert en el Teatro Municipal de Valparaíso. También ha destacado su participación como miembro del jurado en el Concurso Claudio Arrau, durante el año 2017. Se ha dedicado por más de una década a la docencia, destacando a sus alumnos en conciertos anuales. Ha compuesto obras para orquesta de cuerdas y coro, siento interpretada por la Orquesta Marga Marga durante el año 2016.</p>
        </div>
      </section>
    </>
  )
} 