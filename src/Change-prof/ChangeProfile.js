import { useState } from "react"
import { Link } from "react-router-dom"

export const Change = (props)=>{
    const [changename , setChangename] = useState()
    const [changeemail , setChangeemail] = useState()
    const [changeaddres , setChangeaddres] = useState()
    const [changegit , setChangegit] = useState()
    
    return <div>
        <div>
        <input type="text" placeholder="name..." onChange={(event)=>{setChangename(event.target.value)}}></input>
        <button onClick={()=>{props.setName(changename)}}>ویرایش اسم </button>
        </div>

        <div>
        <input 
        type="email"
         placeholder="email..."
          onChange={(event)=>{setChangeemail(event.target.value)}}>
          </input>
        <button onClick={()=>{props.setEmail(changeemail)}}>ویرایش ایمیل </button>
        </div>
        
        <div>
        <input 
        type="text"
         placeholder="addres..."
          onChange={(event)=>{setChangeaddres(event.target.value)}}>
          </input>
        <button onClick={()=>{props.setAddres(changeaddres)}}>ویرایش ادرس </button>
        </div>

        <div>
        <input 
        type="text"
         placeholder="github..."
          onChange={(event)=>{setChangegit(event.target.value)}}>
          </input>
        <button onClick={()=>{props.setGithub(changegit)}}>ویرایش گیت   </button>
        </div>
        <div>
            <Link to={"/"}>close</Link>
        </div>
        </div>

     
}