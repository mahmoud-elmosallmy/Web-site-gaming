// import { Carousel } from 'react-bootstrap';
import { SectionHeader, Slider } from '../../Components'
import './Featured.css'
import {TopDownloaded} from '../index';

export default function Featured() {
    // console.log(FeaturedData)
    

    return (
        <div className="Featured-main">
            <div className='Featured-left item1'>
                <SectionHeader title="Featured " />
                <Slider />
            </div>
            <div className='Featured-right item2'>
                <TopDownloaded />
            </div>
        </div>
    )
}