import {Link} from "react-router-dom"
import {useState} from "react"
import { useNavigate } from "react-router-dom"

function Login(props){

    const navigate= useNavigate()

const[euser,seteuser]=useState("")
const[epass,setepass]=useState("")
const[ruser,setruser]=useState(true)
const users=props.users


function checkuser(){

var userfound=false

    users.forEach(function(item){
        if(item.username===euser && item.password===epass)
        {
            console.log("Login Succesfull")
            userfound=true
            navigate("/landing",{state:{user:euser}})
        }
        
    })
if(userfound==false){
    console.log("Login Failed")
}

}

function handleuinput(evt){
seteuser(evt.target.value)
}
function handlepinput(evt){
setepass(evt.target.value)
}

    return(<div className="bg-black p-10"> 
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
           {ruser?<p>I help you manage your activities after you login:)</p>:<p className="text-red-500">Please Sign up before you log in</p>} 
            <div className="flex flex-col gap-2 my-2">
                <input value={euser} onChange={handleuinput} type="text" className="w-52 border-black p-1 border bg-transparent rounded-md" placeholder="Username"></input>
                <input value={epass} onChange={handlepinput} type="text" className="w-52 border-black p-1 border bg-transparent rounded-md" placeholder="Password"></input>
               
           <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
           <p>Don't have an account? <Link to={"/Signup"} className="underline">Signup</Link></p>
            </div>
    
        </div>
        </div>)
}

export default Login