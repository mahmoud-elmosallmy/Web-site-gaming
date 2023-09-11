import { FaDownload, FaGamepad, FaServer, FaStar } from 'react-icons/fa6'
import { SecondaryButton, SectionWrapper } from '../../Components'
import './GameDetails.css'
import details01 from '../../asset/details-01.jpg'
import details02 from '../../asset/details-02.jpg'
import details03 from '../../asset/details-03.jpg'

function GameDetails() {
  return (
    <div className='game-details'>
        <div className='col-lg-12 text-center mt-5'>
            <h2>FORTNITE DETAILS</h2>
        </div>
        <div className='col-lg-12'>
            <SectionWrapper>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='left-info'>
                            <div className='left'>
                                <h4>Fortnite</h4>
                                <p>Sandbox</p>
                            </div>
                            <ul>
                                <li><span className='text-warning'><FaStar /></span>4.8</li>
                                <li> <span style={{color: 'var(--color-primary)'}}><FaDownload /></span>2.3M</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='right-info'>
                            <ul>
                                <li><span className='text-warning'><FaStar /></span>4.8</li>
                                <li> <span style={{color: 'var(--color-primary)'}}><FaDownload /></span>2.3M</li>
                                <li> <span style={{color: 'var(--color-primary)'}}><FaServer /></span>36GB</li>
                                <li> <span style={{color: 'var(--color-primary)'}}><FaGamepad /></span>Action</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <img className='img-center' src={details01} alt='logo'/>
                    </div>
                    <div className='col-lg-4'>
                        <img className='img-center' src={details02} alt='logo'/>

                    </div>
                    <div className='col-lg-4'>
                        <img className='img-center' src={details03} alt='logo'/>
                    </div>
                    <div className='col-lg-12'>
                        <p>
                            Cyborg Gaming is free HTML CSS website template provided by TemplateMo.
                            This is Bootstrap v5.2.0 layout.
                            You can make a <a href='https://www.paypal.com/paypalme/templatemo'>small contribution via PayPal</a> to info [at] templatemo.com
                            and thank you for supporting.
                            If you want to get the PSD source files, please contact us.
                            Lorem ipsum dolor sit consectetur es dispic dipiscingei elit,
                            sed doers eiusmod lisum hored tempor.
                        </p>
                    </div>
                    <div className='col-lg-12'>
                        <SecondaryButton>Download Fortnite Now!</SecondaryButton>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    </div>
  )
}

export default GameDetails