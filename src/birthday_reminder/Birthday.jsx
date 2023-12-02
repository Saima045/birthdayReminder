import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { data } from './data'

const Birthday = () => {
    const [info,setinfo]=useState(data)
    const removePerson = (id) => {
        const newList = info.filter((item)=>{
            return item.id !== id
        }) 
        setinfo(newList);

    }
  return (
    <>
    <div className="container shadow p-3 mt-3 text-center">
        <h1 className="text-center">
        {info.length} Birthday Reminder </h1>

        {
            info.map((item)=>{

                //return <SingleBirthday  name={item.name} age={item.age} image={item.image} />
                return <SingleBirthday key={item.id} {...item}  rem={removePerson}/>

            })
        }
        {
            info.length==0 ? ( <button onClick={()=>setinfo(data)} className="btn bg-success w-50 ">Refresh All</button>)
            :( <button onClick={()=>setinfo([])} className="btn bg-danger w-50 ">Remove all</button>)
           
        }
       
    
        


    </div>
  
    
    </>
  )
}

export default Birthday