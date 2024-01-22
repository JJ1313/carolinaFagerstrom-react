import "../assets/css/btnTop.css"
export function BtnTop() {
  function goTop() {
    window.scrollTo(0, 0);
  }
  return (
    <button id="btn-top" onClick={goTop}>
    </button>
  )
}