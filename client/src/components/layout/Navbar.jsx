import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "/Users/pabansah/portfolio/client/src/assets/AakashSah.pdf"

const Navbar =() =>{
    const [menu,setMenu] = useState(false);
    return (
        <nav className="navbar">
            <div className="nav-box">
                {/*Logo*/}

                <h1 className="logo">Aakash</h1>
                
                {/*Desktop link*/}
                <ul className="nav-links">
                    <li> <a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            {/*resume*/}
                <a
 href={resume}
 download
 className="btn-primary glow"
>
 Resume
</a>
                

                {/* mobile Icons */}
                <div className="menu-icon" onClick={() => setMenu(!menu)}>
                    {menu ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menu ? "show-menu" : ""}`}>
                <a href="#home" onClick={() => setMenu(false)}>Home</a>
                <a href="#about" onClick={() => setMenu(false)}>About</a>
                <a href="#skills" onClick={()=>setMenu(false)}>Skills</a>
                <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
                <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;