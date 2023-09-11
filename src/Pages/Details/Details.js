// import { Featured, LiveStream, MostPopularLive } from '../../sections'
import './Details.css'
import featureImg from '../../asset/feature-left.jpg'
import featureVedio from '../../asset/feature-right.jpg'
import { FaPlay } from 'react-icons/fa6'
import { GameDetails, OtherGames } from '../../sections'

function Details() {
  return (
    <div className='details'>
        <h1>DETAILS PAGE</h1>
        <div className='details-head'>
            <div className='row'>
                  <div className='col-lg-4'>
                    <img src={featureImg} />
                  </div>
                  <div className='col-lg-8'>
                    <div className='thumb'>
                      <img src={featureVedio} />
                      <a href="https://www.youtube.com/watch?v=r1b03uKWk_M&ab_channel=GaFN" target='_blank'>
                        <FaPlay />
                      </a>
                    </div>
                  </div>
              </div>
        </div>
        <GameDetails />
        <OtherGames />
    </div>
  )
}

export default Details