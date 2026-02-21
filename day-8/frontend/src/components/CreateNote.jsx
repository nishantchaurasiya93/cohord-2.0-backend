import axios from "axios"
import "./create.css"
const CreateNote = ({setCreate}) => {
  const handleSubmit=(e)=>{
   e.preventDefault()
   const{title,description}=e.target.elements
   axios.post("http://localhost:3000/note",{
     title:title.value,
     description:description.value
   }).then(()=>{
    setCreate(pre=>!pre)
      title.value=""
     description.value=""
   })
  }
  return (
       <div>
     <form onSubmit={(e)=>handleSubmit(e)}>
        <input className='input' name='title' placeholder='Please enter title'/>
        <input className='input' name='description' placeholder='Please enter description'/>
      <button className='submit-btn' type="submit">create</button>
    </form>
   </div>
  )
}
export default CreateNote