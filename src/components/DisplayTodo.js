
function DisplayTodo({todolist,deleteTask,updateTask,completeTodo,id}){
    return (
        <>
            <ul>
                {id==="tab1"?
                    todolist.map((todos,index) => {return (
                        <li key = {index} className="list-item"> 
                            <input type="checkbox" id="checkbox" defaultChecked = {todos.isDone} onClick={() => completeTodo(index)}/>
                            <p onClick={()=>{updateTask(index)}}>{todos.todo} </p>
                            <button type="click" onClick={() => deleteTask(index)}> X </button>
                            
                        </li>  
                )}):id==="tab2"?todolist.filter(todos => {
                    return todos.isDone === true;
                  }).map((todo,index) => {
                    return (
                        <li key = {index} className="list-item"> 
                        
                            <input type="checkbox" id="checkbox" defaultChecked = {todo.isDone}  onClick={() => completeTodo(index)}/>
                            <p onClick={()=>{updateTask(index)}}>{todo.todo} </p>
                            <button type="click" onClick={() => deleteTask(index)}> X </button> 
                        </li>  
                    )
                  }):todolist.filter(todos => {
                    return todos.isDone === false;
                  }).map((todo,index) => {
                    return (
                        <li key = {index} className="list-item"> 
                        
                            <input type="checkbox" id="checkbox"  onClick={() => completeTodo(index)}/>
                            <p onClick={()=>{updateTask(index)}}>{todo.todo} </p>
                            <button type="click" onClick={() => deleteTask(index)}> X </button> 
                        </li>  
                    )
                  })}
            </ul>
        </>
    )
}

export default DisplayTodo;