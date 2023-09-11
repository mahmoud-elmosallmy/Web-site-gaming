import './Card.css'
import { FaStar , FaDownload } from 'react-icons/fa6'


function Card(props) {
    const data = props.data
    // console.log(data);
    const showData = data.map((el,i) => {
        return(
            <div className='most-popular-item col-lg-12 col-md-6 col-sm-12' key={i}>
                <div className='card-wrapper'>
                    <img className='most-popular-item-image' src={el.img} alt='img' />
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                            {el.title} <br />
                            <span>{el.titleTow}</span>
                        </h4>
                        <ul>
                            <li><span className='text-warning'><FaStar /></span> <span>{el.valuation}</span></li>
                            <li> <span style={{color: 'var(--color-primary)'}}><FaDownload /></span>  <span>{el.size}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div className='most-popular-items'>
        <div className='row'>

            {showData}
        </div>
            
        </div>
  )
}

export default Card