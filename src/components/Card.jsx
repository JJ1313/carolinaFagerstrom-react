import "../assets/css/card.css"
export function Card(props) {
  return (
    <div className="card">
      <a href={props.link}>
        <img src={props.img} alt="" />
        <h3 className="txt-alert fw-600 fs-12 p-1">{props.title}</h3>
      </a>
    </div>
  )
}