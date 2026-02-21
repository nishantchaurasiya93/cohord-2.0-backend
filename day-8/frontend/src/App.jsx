import CreateNote from "./components/createNote"
import './App.css'
import GetNote from "./components/GetNote"
import { useState } from "react"
const App = () => {
  const[create,setCreate]=useState(false)
  return (
<main>
  <CreateNote setCreate={setCreate}/>
  <GetNote create={create} />
</main>
  )
}

export default App