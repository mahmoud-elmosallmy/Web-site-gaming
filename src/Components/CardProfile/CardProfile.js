import './CardProfile.css'
import { ProfileData } from '../../Json/ProfileData'
import { FaEye, FaPlay } from 'react-icons/fa6'


function CardProfile() {
    const showData = ProfileData.map((el,i) =>(
        <div key={i} className='col-lg-3 col-sm-6'>
            <div className='item'>
                <div className='thumb'>
                    <img src={el.img} />
                    <a href="https://www.youtube.com/watch?v=r1b03uKWk_M&ab_channel=GaFN" target='_blank'>
                        <FaPlay />
                    </a>
                </div>
                <div className='content'>
                    <h4>{el.title}</h4>
                    <span><FaEye />{el.watch}</span>
                </div>
            </div>
        </div>
    ))
  return (
    <div className='row cardprofile'>
        {showData}
    </div>
  )
}

export default CardProfile