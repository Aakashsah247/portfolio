const ContactSection =() =>{
     return (

        <section id="contact">
            <h1 className="section-title">Contact Me</h1>
            <p className="section-sub">Let's build something together</p>

            <div className="contact-box">
                <form>
                    <input type="text" placeholder="Your Name" className="input"/>
                    <input type="Email" placeholder="Your Email" className="input" />
                    <input type="text" placeholder="Subject" className="input" />
                    <textarea row ="6" placeholder=" Your Message" className="input" />

                    <button className="contact-btn glow"> Send Message</button> 

                </form>
            </div>
        </section>


     )
}

export default ContactSection;




