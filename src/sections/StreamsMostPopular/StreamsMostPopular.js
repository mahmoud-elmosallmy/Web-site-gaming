import { DownButton, SectionHeader, SectionWrapper, StreamsMostCard } from '../../Components'
import './StreamsMostPopular.css'

function StreamsMostPopular() {
  return (
    <SectionWrapper>
        <SectionHeader title="Most Popular" />
        <StreamsMostCard />
        <DownButton link="/">Load More Streams</DownButton>
    </SectionWrapper>
  )
}

export default StreamsMostPopular