import './MostPopularLive.css'

import { DownButton, SectionHeader ,SectionWrapper } from '../../Components/index'
import { MostPopularLiveData } from '../../Json/MostPopularLiveData'
import { FaCheck } from 'react-icons/fa6'

function MostPopularLive() {
  const show_data = MostPopularLiveData.map((el,i) => (
    <div className='item col-lg-3 col-md-6 col-sm-12' key={i}>
          <div className='position'>
            <img src={el.img} alt='Most Popular Live Data'/>
          </div>
          <ul>
            <li><img src={el.icon} alt='Most Popular Live Data'/></li>
            <li><FaCheck /> <span>{el.name}</span></li>
          </ul>
          <h4>{el.title}</h4>
    </div>
  ))
  return (
    <SectionWrapper>
        <SectionHeader title="Most Popular" />
        <div className='mostlive'>
          <div className='row'>
            {show_data}
          </div>
        </div>
        <DownButton link="/streams">Discover All Streams</DownButton>
    </SectionWrapper>
  )
}

export default MostPopularLive