import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import Slider from '../../Components/Slider/Slider'
import {TopStreamers} from '../index';
import './LiveStreams.css'

function LiveStreams() {
  return (
    <div className="livestreams-main">
        <div className='livestreams-left'>
            <SectionHeader title='Live Streams' />
            <Slider />
        </div>
        <div className='livestreams-right'>
            <TopStreamers />
        </div>
    </div>
  )
}

export default LiveStreams