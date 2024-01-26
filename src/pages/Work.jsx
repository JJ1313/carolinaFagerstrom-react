import { VideoCard } from "../components/VideoCard"
export function Work() {
  let tag = document.createElement('script');
  let player;
  let firstScriptTag = document.getElementsByTagName('script')[0];

  tag.src = "//www.youtube.com/player_api";
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
      events: {
        // call this function when player is ready to use
        'onReady': onPlayerReady
      }
    });
  }

  return (
    <section className="section | mt-10">
      <h2 className="ff-secondary fw-600 txt-center fs-1p6 txt-upper | mb-3">obras</h2>
      <div className="d-grid cols cols-md-2 cols-lg-3 g-1">
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8?enablejsapi=1"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>
        <VideoCard link="https://www.youtube.com/embed/y4_Vuu6QdiQ?si=ho2jE9vSRQhiTAD8"></VideoCard>

      </div>
    </section>
  )
}