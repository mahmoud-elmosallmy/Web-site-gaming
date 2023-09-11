import './Header.css'
import Logo from'../../asset/logo.png'
import profileHeader from'../../asset/profile-header.jpg'
import NavItem from "../../Components/NavItem/NavItem";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {

    useEffect(() => {
        const element = document.querySelectorAll('.navbar .collapse .navbar-nav a')
        console.log(element);
        if (window.localStorage.getItem("classActive")) {
            element.forEach((re) => {
                re.classList.remove('active')
            })
            document.querySelector(`[data-catch="${window.localStorage.getItem("classActive")}"]`).classList.add("active")
        }
        element.forEach(function (ele) {
            ele.addEventListener('click', (e) => {
                element.forEach((e) => {
                    console.log('active');
                    e.classList.remove("active");
                })
                e.currentTarget.classList.add("active");
                window.localStorage.setItem('classActive',e.currentTarget.getAttribute("data-catch"))
            });
        });
    },[])
    return(
        <>
          <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
                <div className="container">
                    <Link to={'/'} className="navbar-brand"><img src={Logo} alt='Logo' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto">
                            <NavItem>
                                <Link  
                                    to={'/'} 
                                    data-catch="1" 
                                    className="nav-link active">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link  
                                    to={'/browse'} 
                                    data-catch="browse"
                                    className="nav-link">Browse</Link>
                            </NavItem>
                            <NavItem>
                                <Link  
                                    to={'/details'} 
                                    data-catch="details"
                                    className="nav-link">Details</Link>
                            </NavItem>
                            <NavItem>
                                <Link  
                                    to={'/streams'} 
                                    data-catch="streams"
                                    className="nav-link">Streams</Link>
                            </NavItem>
                            <NavItem>
                                <Link  
                                    to={"profile"} 
                                    data-catch="profile"
                                    className="nav-link profile">Profile<img src={profileHeader} alt='profile'/></Link>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        
    )
}