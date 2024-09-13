import Header from "../Header.jsx"
import Card from "../components/Card.jsx";
import TodoContainer from "../components/TodoContainer.jsx"
import {useLocation} from "react-router-dom"


function Landing() {

    const data = useLocation()
    

  return (
    <div className='bg-black p-16'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        {/*Header*/}
        <Header username={data.state.user} />
        {/*Card*/}
        <div className="flex gap-7 py-5 flex-wrap">
          
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
          <Card  bgcolor={"#FD6663"} title={"August 16"} subtitle={"14:02:08"}/>
          <Card  bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}/>
        </div>
        {/*ToDoContainer*/}
        <TodoContainer/>
      </div>

    </div>
  );
}

export default Landing
