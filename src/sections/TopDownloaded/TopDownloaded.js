import { Card, SectionHeader } from '../../Components'
import './TopDownloaded.css'
import { data } from '../../Json/Data'

export default function TopDownloaded() {
  return (
    <div>
        <SectionHeader title="Top" />
        <div className='topdownloaded'>
          <Card data={data} />
        </div>
    </div>
  )
}
