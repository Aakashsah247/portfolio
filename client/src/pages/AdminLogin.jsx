import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

const AdminLogin = () => {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const navigate = useNavigate()

const handleLogin = async(e) => {
    e.preventDefault()
    try{
        setLoading(true)
        const res = await api.post("/login",{
            username: username,
            password: password
        })
        localStorage.setItem("adminToken",res.data.access_token)
        navigate("/admin")

        }catch(err){
            alert("Invalid login")

    }finally{
        setLoading(false)
    }
    
}
return(

<section className="login-page">

<form
className="login-box"
onSubmit={handleLogin}
>

<h1 className="login-title"> Admin Login </h1>

<input
type="text" placeholder="Username"
className="input"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="input"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit" className="contact-btn glow"> 
    {
        loading ? "Logging in..." : "Login"
    }
</button>

</form>

</section>

)

}

export default AdminLogin