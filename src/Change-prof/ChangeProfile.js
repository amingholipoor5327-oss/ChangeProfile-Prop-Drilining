import { useState } from "react"

export const Change = (props)=>{
    const [changename , setChangename] = useState()
    return<div>
        <input type="text" onChange={(event)=>{setChangename(event.target.value)}}></input>
        <button onClick={()=>{props.setName(changename)}}>ویرایش اسم </button>
    </div>
}