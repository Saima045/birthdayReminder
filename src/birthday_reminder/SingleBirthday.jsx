import React from 'react'

const SingleBirthday = ({id,name, age, image,rem}) => {
  return (
    <>
    <div className="container my-1 d-flex mt-3 justify-content-between align-items-center">
    <div className="left d-flex gap-3 align-items-center">
        <img style={{
            width:'70px', 
            height:'70px',
            borderRadius:'50%',
            objectFit:'cover'
            }} src={image} alt="" />
        <div className="info">
            <h6>{name}</h6>
            <h6>{age}</h6>
        </div>

    </div>
    <div className="right">
        <button onClick={()=>rem(id)} className="btn bg-danger">Remove</button>

    </div>

</div>
</>
  )
}

export default SingleBirthday