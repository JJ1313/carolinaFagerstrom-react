import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Work } from "./pages/work"
import { News } from "./pages/news"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { BtnTop } from "./components/BtnTop"

import "./assets/css/styles.css"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/news' element={<News />} />
      </Routes>
      <Footer></Footer>
      <BtnTop></BtnTop>
    </>
  )
}

export default App