import "../assets/css/card.css"
export function Card(props) {
  return (
    <div className="card hover-shadow">
      <a href={props.link} >
        <img src={props.img} loading="lazy" alt="" />
        <h3 className="txt-alert fw-600 fs-1p2 p-1">{props.title}</h3>
      </a>
    </div>
  )
}