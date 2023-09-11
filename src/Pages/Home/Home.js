import './Home.css'
import { Hero , MostPopular, GamingLibrary } from '../../sections';


function Home() {
  return (
    <>
        <h1>HOME PAGE</h1>
        <Hero />
        <MostPopular />
        <GamingLibrary />
    </>
  )
}

export default Home