import './GamingLibraryCard.css'
import { SecondaryButton } from '../../Components';
import { GamingLibraryData } from '../../Json/GamingLibraryData'

function GamingLibraryCard(props) {
    const show_Data = GamingLibraryData.map((el,i) => {
        return(
            <div className='gaming-library-card' key={i}>
                <ul>
                    <li className='gaming-library-card-img'><img src={el.img} /></li>
                    <li><h4>{el.title}</h4><span>{el.category}</span></li>
                    <li><h4>Date Added</h4><span>{el.date_added}</span></li>
                    <li><h4>Hours Played</h4><span>{el.hours_played}</span></li>
                    <li><h4>Currently</h4><span>{el.download}</span></li>
                    <SecondaryButton>{props.Download}</SecondaryButton>
                </ul>
            </div>
        )
    })
  return (
    <div className='gaming-library-cards'>
        {show_Data}
    </div>
  )
}

export default GamingLibraryCard