import {
FaGithub,
FaLinkedin,
FaInstagram,
FaFacebook
} from "react-icons/fa"

const Footer = () => {

return(

<footer className="footer">

<div className="footer-box">

{/* Left */}

<div className="text-left">

<h1 className="footer-logo">Aakash</h1>

</div>

{/* Center */}

<div className="text-center">

<p className="footer-text">Full Stack & AI Developer</p>

<p className="footer-text">© 2026 Aakash Shah. All rights reserved.</p>

</div>

{/* Right */}

<div className="footer-icons justify-center md:justify-end">

<a href="https://github.com/Aakashsah247" target="_blank" className="footer-icon">
<FaGithub />
</a>

<a href="https://www.linkedin.com/in/aakash-sah-7aba581b9/" target="_blank" className="footer-icon">
<FaLinkedin />
</a>

<a href="https://www.instagram.com/aakashsah000/" target="_blank" className="footer-icon">
<FaInstagram />
</a>

<a href="https://www.facebook.com/Aakash.sah.509994" target="_blank" className="footer-icon" >
<FaFacebook />
</a>

</div>

</div>

</footer>

)

}

export default Footer