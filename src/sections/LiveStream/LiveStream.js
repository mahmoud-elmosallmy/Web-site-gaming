import { DownButton, SectionHeader } from '../../Components'
import './LiveStream.css'
import { LiveStreamData } from '../../Json/LiveStreamData'


export default function LiveStream() {
   const show_Live = LiveStreamData.map((el,i) => (
            <div className='livestream-card col-lg-3 col-md-5 col-sm-12 mt-5' key={i}>
                <img src={el.img} alt='Live Stream Data' />
                <h4>{el.title}</h4>
                <p>{el.pragraph}</p>
            </div>
   ))

    return (
        <div className="livestream-main">
            <div className='livestream-title'>
                <SectionHeader title="How To Start Your" />
            </div>
            <div className='livestream-container'>
                <div className='row'>
                    {show_Live}
                </div>
            </div>
            <DownButton link="/profile">Go To Profile</DownButton>
        </div>
    )
}