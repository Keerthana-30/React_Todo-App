import TabComponent from "./TabComponent";
import TabContent from "./TabContent";
import DisplayTodo from "./DisplayTodo";
import { useState } from "react";

function Tabs({todolist,deleteTask,updateTask,completeTodo}){

    const [activeTab, setActiveTab] = useState("tab1");

    return (
       
        
       <div>
            <ul className = "tabs">
                <TabComponent  id="tab1"  title ="All Tasks" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabComponent  id= "tab2"  title ="Completed Tasks" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabComponent  id= "tab3"  title ="Incomplete Tasks" activeTab={activeTab} setActiveTab={setActiveTab}/>
                
            </ul>
            <hr/>
            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <DisplayTodo todolist={todolist} deleteTask = {deleteTask} updateTask = {updateTask} completeTodo = {completeTodo} id="tab1"/>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <DisplayTodo todolist={todolist} deleteTask = {deleteTask} updateTask = {updateTask} completeTodo = {completeTodo} id="tab2"/>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <DisplayTodo todolist={todolist} deleteTask = {deleteTask} updateTask = {updateTask} completeTodo = {completeTodo} id="tab3"/>
                </TabContent>
            </div>

       </div>

    )
}

export default Tabs