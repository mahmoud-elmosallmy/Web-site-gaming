import { Featured, LiveStream, MostPopularLive } from '../../sections'
import './Browse.css'


function Browse() {
  return (
    <div className='browse'>
        <h1>BROWSE PAGE</h1>
        <Featured />
        <LiveStream />
        <MostPopularLive />
    </div>
  )
}

export default Browse