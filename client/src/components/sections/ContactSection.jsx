import { useState } from "react";
import api from "/Users/pabansah/portfolio/client/src/services/api.js";

const ContactSection = () => {

const [form,setForm] = useState({
 name:"",
 email:"",
 message:""
})

const [loading,setLoading] = useState(false)

const handleChange = (e) => {
 setForm({
  ...form,
  [e.target.name]:e.target.value
 })
}

const handleSubmit = async(e) => {

 e.preventDefault()

 try{

  setLoading(true)

  const res = await api.post("/contact",form)

  alert(res.data.message)

  setForm({
   name:"",
   email:"",
   message:""
  })

 }catch(err){

  alert("Failed to send message")

 }

 finally{

  setLoading(false)

 }

}

return(

<section id="contact" className="section">

<h1 className="section-title">
Contact Me
</h1>

<p className="section-sub">
Let's build something together
</p>

<div className="contact-box">

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Your Name"
className="input"
required
/>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Your Email"
className="input"
required
/>

<textarea
rows="6"
name="message"
value={form.message}
onChange={handleChange}
placeholder="Your Message"
className="input"
required
/>

<button
type="submit"
className="contact-btn glow"
>

{
loading ? "Sending..." : "Send Message"
}

</button>

</form>

</div>

</section>

)

}

export default ContactSection

