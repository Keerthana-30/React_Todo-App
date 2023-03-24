import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';
import Tabs from './components/Tabs';
function App() {

  const [todolist,setTodolist] = useState([]);


  const addTask = (todo) =>{
    setTodolist(()=>[...todolist,{"todo":todo,"isDone":false}]); 
    console.log(todolist);
  }

  const deleteTask = (index) => {
      setTodolist(todolist.filter((todo,todoindex)=>  index===todoindex ? false:true))
  }
  
  const updateTask = (index) =>{

  }

  const completeTodo = (index) => {
    setTodolist(todolist.map((todo,todoindex) => {
      if (index===todoindex){
        if (todo.isDone){
          todo.isDone = false;
        }
        else{
          todo.isDone = true;
        }
        return todo;
      }

      return todo;

    } ))
  }
  return (
    <div className = "App">
      <div className="App-header">
        <Header />
      </div>
      
      <div className = "addtask">
        <Input addTask={addTask}/>
      </div>

      <div className = "tabTask">
          <Tabs todolist={todolist} deleteTask = {deleteTask} updateTask = {updateTask} completeTodo = {completeTodo}/>
      </div>
      
    </div>
  );
}

export default App;
