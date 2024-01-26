import "../assets/css/card.css"
import { useState } from "react";
export function Card(props) {
  const [imgIsLoaded, setImgIsLoaded] = useState(false)
  const wrapperStyle = {
    backgroundImage: `url(${props.imgSmall})`,
  }

  return (
    < article className="card hover-shadow" >
      {props.link ?
        <a href={props.link} target="_blank">
          <div className="img-wrapper blur-load" style={wrapperStyle} data-loaded={imgIsLoaded}>
            < img style={imgIsLoaded ? { opacity: 1 } : { opacity: 0 }} src={props.img} onLoad={() => { setImgIsLoaded(true) }} loading="lazy" />
          </div>
          <h3 className="txt-alert fw-600 fs-1p2 p-1">{props.title}</h3>
        </a > :
        <a target="_blank">
          <div className="img-wrapper blur-load" style={wrapperStyle} data-loaded={imgIsLoaded}>
            < img style={imgIsLoaded ? { opacity: 1 } : { opacity: 0 }} src={props.img} onLoad={() => { setImgIsLoaded(true) }} loading="lazy" />
          </div>
          <h3 className="txt-alert fw-600 fs-1p2 p-1">{props.title}</h3>
        </a >
      }
    </ article >
  )
}