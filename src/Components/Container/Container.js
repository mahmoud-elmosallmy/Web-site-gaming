import './Container.css'

export default function Container(props) {
    return(
        <div className="container main-container">
            {props.children}
        </div>
    )
}