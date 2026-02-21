import { useState } from "react"
import "./app.css"
import axios from "axios"
const App = () => {
  const [notesData, setNotesData] = useState([])
  axios.get("http://localhost:3000/notes")
  .then((res)=>{
   setNotesData(res.data.notes);
   
  })
  return (
    <main>
    {notesData.map((note,ind)=>( 
     <div className="note" key={ind}>
      <p><span>title:</span>{note.title}</p>
      <p><span>description:</span>{note.description}</p>
     </div>
    ))}
    </main>
  )
}

export default App 