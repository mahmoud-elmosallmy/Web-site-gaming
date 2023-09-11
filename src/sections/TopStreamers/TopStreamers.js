import { SectionHeader, TopStreamersCard } from '../../Components'
import './TopStreamers.css'

function TopStreamers() {
  return (
    <div>
        <SectionHeader title="Top" />
        <div className='topstreamers'>
          {/* <Card data={data} /> */}
          <TopStreamersCard />
        </div>
    </div>
  )
}

export default TopStreamers