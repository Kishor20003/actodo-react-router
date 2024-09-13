import AddToDoForm from "./AddTodoForm"
import Todolist from "./Todolist"
import {useState} from "react"

function TodoContainer() {
    const [activityArr,setactivityArr]=useState([
        {
        id:1,
        activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])

    return (<div>
        <div className="flex gap-5 flex-wrap">
        <AddToDoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
        <Todolist activityArr={activityArr} setactivityArr={setactivityArr}/>
      
        </div>

    </div>)
}

export default TodoContainer