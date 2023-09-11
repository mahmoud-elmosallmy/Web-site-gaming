import { Card, SectionHeader, SectionWrapper } from '../../Components'
import './OtherGames.css'
import { data } from '../../Json/Data'
function OtherGames() {
  return (
    <div className='other-games'>
        <SectionWrapper>
            <SectionHeader title="Other Games" />
            <Card data={data} />
        </SectionWrapper>
    </div>
  )
}

export default OtherGames