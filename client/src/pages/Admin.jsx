import { useEffect, useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

const Admin = () => {

const [messages,setMessages] = useState([])
const [search,setSearch] = useState("")

const navigate = useNavigate()

const logout = () => {

localStorage.removeItem("adminToken")

navigate("/admin-login")

}

useEffect(()=>{

getMessages()

},[])

const getMessages = async()=>{

try{

const res = await api.get("/messages")
setMessages(res.data)

}catch(err){

console.log(err)

}

}

const deleteMsg = async(id)=>{

const confirmDelete = confirm("Delete this message?")

if(!confirmDelete){
 return
}

try{

await api.delete(`/messages/${id}`)
getMessages()

}catch(err){

alert("Failed to delete message")

}

}

const filtered = messages.filter((msg)=>
msg.name.toLowerCase().includes(search.toLowerCase()) ||
msg.email.toLowerCase().includes(search.toLowerCase()) ||
msg.message.toLowerCase().includes(search.toLowerCase())
)

return(

<section className="admin">

<div className="admin-head">

<div>

<h1 className="admin-title"> Admin Messages </h1>

<p className="admin-sub">Manage contact form messages</p>

</div>

<div className="count-box">

<h2>{messages.length} </h2>

<p> Messages </p>

</div>
<button className="del-btn" onClick={logout}> Logout </button>

</div>

<input
type="text"
placeholder="Search messages..."
className="search"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="table-box">

<table className="msg-table">

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Message</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{
filtered.map((msg)=>(

<tr key={msg.id}>

<td>{msg.name}</td>

<td>{msg.email}</td>

<td>{msg.message}</td>

<td>

<button className="del-btn" onClick={()=>deleteMsg(msg.id)}> Delete </button>

</td>

</tr>

))
}

</tbody>

</table>

{
filtered.length === 0 && (

<p className="empty"> No messages found </p>

)
}

</div>

</section>

)

}

export default Admin