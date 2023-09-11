import { LiveStreams, StreamsMostPopular } from '../../sections'
import './Streams.css'

function Streams() {
  return (
    <div className='streams'>
        <h1>STREAMS PAGE</h1>
        <LiveStreams />
        <StreamsMostPopular />
    </div>
  )
}

export default Streams