import './GamingLibrary.css'
import { GamingLibraryCard, SectionHeader ,SectionWrapper } from '../../Components/index'
const GamingLibrary = () => {

  return (
    <SectionWrapper>
        <SectionHeader title="Your Gaming" />
        <GamingLibraryCard Download="Download" />
    </SectionWrapper>
  )
}
export default GamingLibrary;