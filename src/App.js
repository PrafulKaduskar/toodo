import './App.css';
import { useState } from 'react';
import deleteicon from "./delete.jpeg"
import editicon from "./edit.jpeg"


function App() { 


const[input, setInput] = useState("");
const[list, setList] = useState([]);
const[uid, setUid] = useState();


  
 const handleInput = (e)=>{
  setInput(e.target.value)
 }

 const handleTask = ()=>{
  setList([...list,input])
  setInput("")
 }

 const handleUpdate = ()=>{
  list.splice(uid, 1, input);
  setInput("")
 }
 
 const handleDelete = (i)=>{
  const filterList = list.filter((elm)=> elm !== list[i])
  console.log(filterList)
  setList(filterList)
 }

 const handleEdit = (i)=>{
  const filterList = list.filter((elm)=> elm == list[i])
  setInput(filterList[0])
  setUid(i)



 }

  return (
  
  <div className="App">  
  <h1>Todo App</h1>
    <div className="container">
    <div className="inputbox">
    <input type="text" value={input} onChange={(e)=>handleInput(e)}placeholder='Enter Task' /> <button  onClick={handleTask}>Add task</button>
    <button  onClick={handleUpdate}>Update</button>
   
    </div>
    <div className="list">
    <ul>
    {list.map((item,i)=> <li key={i} >{item}
     <img src={deleteicon} className='dlticon' alt="delete" onClick={()=>handleDelete(i)} /> 
      <img src={editicon} className='editicon' alt="edit" onClick={()=>handleEdit(i)} /> </li>)}
  
  </ul>
  <body className='last'></body>
  
  </div>
  </div>
</div>
  
  );
}

export default App;