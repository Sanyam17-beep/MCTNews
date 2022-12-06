import "../styles/navbar.css"
import { Link } from "react-router-dom"
const Navbar = ()=>{
    return <>
    <nav className="navbar">
        <div className="logo">
            <img src="" alt="LOGO" />
        </div>
        <div className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </div>
    </nav>
    </>
}
export default Navbar