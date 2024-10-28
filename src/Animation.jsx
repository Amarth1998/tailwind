import React from 'react'

const Animation = () => {
  return (
    <div>

        <div className='size-10 ml-10  bg-red-600 mt-10 rounded-full
         animate-bounce 
        '></div>
        <hr  />

        <br />
        <div className="w-32 h-2 bg-red-600 mt-32 ml-32 animate-spin"></div>
      

      <img src="./public/funny.png" className='w-32 m-32 animate-spin rounded-full' alt="" />

      <div className="w-32 h-2 bg-red-600 mt-32 ml-32 animate-ping"></div>
      <div className="w-32 h-2 bg-red-600 mt-32 ml-32 animate-pulse"></div>


      <img src="./public/funny.png" className='w-32 m-32 animate-pulse rounded-full' alt="" />

    </div>
  )
}

export default Animation
