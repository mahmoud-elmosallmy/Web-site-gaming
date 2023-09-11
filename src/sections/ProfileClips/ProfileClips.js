import { CardProfile, PrimaryButton, SecondaryButton, SectionHeader, SectionWrapper } from '../../Components'
import './ProfileClips.css'
import ProfileImg from '../../asset/profile.jpg'


function ProfileClips() {
  return (
    <SectionWrapper>
        <div className='profileclips'>
            <div className='profile-head'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12'>
                        <img src={ProfileImg} alt='Profile Img'/>
                    </div>
                    <div className='col-lg-4 col-md-12 head-center'>
                        <PrimaryButton>Offline</PrimaryButton>
                        <div className='text'>
                            <h4>Alan Smithee</h4>
                            <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                        </div>
                        <SecondaryButton>Start Live Stream</SecondaryButton>
                    </div>
                    <div className='col-lg-4 col-md-12 head-end'>
                        <ul>
                            <li>
                                Games Downloaded
                                <span>3</span>
                            </li>
                            <li>
                                Friends Online
                                <span>16</span>
                            </li>
                            <li>
                                Live Streams
                                <span>None</span>
                            </li>
                            <li>
                                Clips
                                <span>29</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='profile-end'>
                <SectionHeader title="Your Most Popular" />
                <CardProfile />
                <PrimaryButton link="/">Load More Clips</PrimaryButton>
            </div>
        </div>
    </SectionWrapper>
  )
}

export default ProfileClips