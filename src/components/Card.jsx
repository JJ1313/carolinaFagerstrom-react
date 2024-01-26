import "../assets/css/card.css"
import { useState } from "react";
export function Card(props) {
  const [imgIsLoaded, setImgIsLoaded] = useState(false)

  return (
    < article className="card hover-shadow" >
      <a href={props.link} >
        <div className="blur-load" style={{ backgroundImage: `url(${props.imgSmall})` }}>
          < img style={imgIsLoaded ? { opacity: 1 } : { opacity: 0 }} src={props.img} onLoad={() => { setImgIsLoaded(true) }} loading="lazy" alt="" />
        </div>
        <h3 className="txt-alert fw-600 fs-1p2 p-1">{props.title}</h3>
      </a >
    </ article>
  )
}