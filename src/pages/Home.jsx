import { Contact } from "../components/Contact"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { NewsHome } from "../components/NewsHome"
export function Home() {

  return (
    <>
      <Hero></Hero>
      <About></About>
      <NewsHome></NewsHome>
      <Contact></Contact>
    </>
  )
}