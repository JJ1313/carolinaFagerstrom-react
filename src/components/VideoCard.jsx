import "../assets/css/videoCard.css"
export function VideoCard(props) {

  return (
    <article>
      <iframe src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </article>
  )
}