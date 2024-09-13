import {Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){

    const navigate=useNavigate()

const users =props.users
const setusers =props.setusers


const[euser,seteuser]=useState("")
const[epass,setepass]=useState("")

function handleuinput(evt){
    seteuser(evt.target.value)
    }
    function handlepinput(evt){
    setepass(evt.target.value)
    }

    function addusers(){
setusers([...users,{username:euser,password:epass}])
        navigate("/")
    }



    return(<div className="bg-black p-10"> 
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Signup Here :)</p>
        <div className="flex flex-col gap-2 my-2">
            <input onChange={handleuinput} type="text" className="w-52 border-black p-1 border bg-transparent rounded-md" placeholder="Username"></input>
            <input  onChange={handlepinput} type="text" className="w-52 border-black p-1 border bg-transparent rounded-md" placeholder="Password"></input>
            <input type="text" className="w-52 border-black p-1 border bg-transparent rounded-md" placeholder="Confirm Password"></input>
       <button onClick={addusers} className="bg-[#8272DA] w-24 p-1 rounded-md">Signup</button>
       <p>Already have an account? <Link to={"/login"} className="underline">Login</Link></p>
        </div>

    </div>
    </div>)
}


export default Signup