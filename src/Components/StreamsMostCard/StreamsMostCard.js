import { FaCheck } from 'react-icons/fa6'
import { StreamsMostData } from '../../Json/StreamsMostData'
import './StreamsMostCard.css'

function StreamsMostCard() {
  const show_data = StreamsMostData.map((el,i) => (
    <div className='col-lg-3 col-sm-6 cont' key={i}>
          <div className='item'>
            <div className='position'>
              <img src={el.img} />
            </div>
          </div>
          <ul>
            <li><img src={el.icon} /></li>
            <li><FaCheck /> <span>{el.name}</span></li>
          </ul>
          <h4>{el.title}</h4>
    </div>
  ))
  return (
    <div className='moststreamers row'>
      {show_data}
    </div>
  )
}

export default StreamsMostCard