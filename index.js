import React,{useState} from "react";
import  ReactDOM  from "react-dom";
import  './index.css';

const AddTask =({addTask})=>{
  const[value,updatevalue] = useState("");

const handleSubmit= e =>{
  e.preventDefault();
  if(value !=="") 
  {
    addTask(value)
    updatevalue("");
  }
};
return( 
  
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    value={value}
    placeholder="enter your task todo"
    onChange={e => updatevalue(e.target.value)}
   />
  <button type="submit"><i class="material-icons">Add</i></button>
  </form>
); 
}; 

const ToDoList = () =>{
  const addTask = text =>updatetasks([...tasks,{text}]);
  const[tasks,updatetasks] = useState([
 {
  text:"wake up",
  isCompleted:false
 },
 {
  text:"fresh up",
  isCompleted:false
 },
 {
  text:"boost up",
  isCompleted:false
 }
 ]);
const toggletask = index =>{
  const newTask = [...tasks];
  if(newTask[index].isCompleted)
  {
    newTask[index].isCompleted = false;
  }
  else{
    newTask[index].isCompleted = true; 
  }
  updatetasks(newTask)
}
const removeTask = index =>{
  const newTask=[...tasks];
  newTask.splice(index,1);  
  updatetasks(newTask);

}
   return(
    <div className="list-of-tasks-todo">
       {tasks.map((tasks,index) =>(
         <div className="tast-status">
          <span onClick={() => toggletask(index)} className={tasks.isCompleted? "task-name  completed-task":"task-name"}>
           {index}
           {tasks.text}
           </span>
           <button onClick={() => removeTask(index)}><i class="material-icons" >delete</i></button>
    </div>
    ))}
    <AddTask addTask={addTask}/>
    </div>
   ); 
} 
ReactDOM.render(<ToDoList />,document.getElementById('root'));
 