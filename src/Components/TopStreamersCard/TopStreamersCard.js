import './TopStreamersCard.css'
import { FaCheck } from 'react-icons/fa6'
import {TopStreamersData} from '../../Json/TopStreamersData'
import PrimaryButton from '../Buttons/Buttons'


function TopStreamersCard() {
    const showData = TopStreamersData.map((el,i) => {
        return(
            <div className='streamers-item' key={i}>
                <div className='card-wrapper'>
                    <div className='streamers-item-content'>
                        <div className='streamers-item-img'>
                            <div>0{i + 1}</div>
                            <img className='streamers-item-image' src={el.img} />
                        </div>
                        <div className='streamers-item-title'>
                            <FaCheck />
                            <h4 className='streamers-item-title'>{el.title}</h4>
                        </div>
                    </div>
                    <PrimaryButton>Follow</PrimaryButton>
                </div>
            </div>
        )
    })
  return (
    <div className='streamers-items'>
        {showData}
    </div>
  )
}

export default TopStreamersCard