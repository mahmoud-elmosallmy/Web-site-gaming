import { Link } from 'react-router-dom'
import './Buttons.css'

function PrimaryButton(props) {
  return (
    <div className='button primary-btn'>
        <Link to={props.link}>{props.children}</Link>
    </div>
  )
}
function SecondaryButton(props) {
  return (
    <div className='button secondary-btn'>
        <Link to={props.link}>{props.children}</Link>
    </div>
  )
}

function DownButton(props) {
  return (
    <div className='button primary-btn downbutton'>
        <Link to={props.link}>{props.children}</Link>
    </div>
  )
}

export default PrimaryButton
export { SecondaryButton , DownButton  }