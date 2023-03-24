import { useState } from "react";

function Input({addTask}){

    const [todo,setTodo] = useState("");

    const handleSubmit = () => {
        if (!todo){
            alert("please enter value");
        }else{
            addTask(todo)
            setTodo("");
        }
        
    } 
    return (
        <>
            <input name="todo" type="text" placeholder="Add New" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
            <button type = "submit" onClick={handleSubmit}> Add </button>
            
        </>
        
    );
}

export default Input;