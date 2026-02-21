import axios from "axios"
import "./get.css"
import { useEffect, useState } from "react"
const GetNote = ({create}) => {
    const[noteData,setNoteData]=useState([])
   
    const fetchNote=async()=>{
       await axios.get('http://localhost:3000/notes')
   .then(res=>setNoteData(res.data.notes))}
    useEffect(()=>{
       fetchNote()
    },[create])   
     const handleClick=async(note)=>{
       await axios.delete(`http://localhost:3000/note/${note._id}`)
       .then(()=>{
        fetchNote()
       })
    }
  return (
   
      <div className="note-container">{noteData.map?.((note)=>
    ( 
      <div className="note" key={note._id}>
    <div >
          <h4>title:{note.title}</h4>
        <h4>description:{note.description}</h4>
    </div>
    <button onClick={()=>handleClick(note)} className="delete-btn">delete</button>
      </div>
    )
    
      )}</div>
    
  )
}
export default GetNote