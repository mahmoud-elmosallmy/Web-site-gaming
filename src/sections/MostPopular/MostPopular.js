import './MostPopular.css'

import { Card , DownButton, SectionHeader ,SectionWrapper } from '../../Components/index'
import { data } from '../../Json/Data'
// import { useEffect, useState } from 'react'

function MostPopular() {
  // const [carddata ,setData] = useState([])
  // console.log(carddata);
  // useEffect(() => {
  //     fetch('http://localhost:9000/HomeMosat')
  //     .then((data) => data.json())
  //     .then((data) => setData(data))
  // },[])
  return (
    <SectionWrapper>
        <div className='mostpopular'>
          <SectionHeader title="Most Popular" />
          <Card data={data} />
          <DownButton  link="/browse">Discover Popular</DownButton>
       </div>
      </SectionWrapper>
  )
}

export default MostPopular