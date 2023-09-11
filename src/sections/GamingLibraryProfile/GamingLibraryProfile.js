import './GamingLibraryProfile.css'
import { GamingLibraryCard, SectionHeader ,SectionWrapper } from '../../Components/index'
const GamingLibraryProfile = () => {

  return (
    <SectionWrapper>
      <div className='gaminglibraryprofile'>
        <SectionHeader title="Your Gaming" />
        <GamingLibraryCard Download="Download" />
      </div>
    </SectionWrapper>
  )
}
export default GamingLibraryProfile;