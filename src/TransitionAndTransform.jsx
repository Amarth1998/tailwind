import React from 'react'

const TransitionAndTransform = () => {
  return (
    <div>

        <button className='bg-blue-400 p-3 rounded m-10 text-white hover:bg-blue-700'>Login1</button>
      


        <button className='bg-blue-400 p-3 rounded m-10 text-white hover:bg-blue-700
        transition duration-1000
        '>Login2</button>

<button className='bg-blue-400 p-3 rounded m-10 text-white hover:bg-blue-700 hover:opacity-5
        transition duration-1000
        '>Login3</button>

<button className='bg-red-400 p-3 rounded m-10 text-white 
hover:rotate-180
transition-transform duration-1000 
        '>Login4</button>


<button className='bg-red-400 p-3 rounded m-10 text-white 
hover:scale-50
transition-transform duration-1000 
        '>Login4</button>
      

      <button className='bg-red-400 p-3 rounded m-10 text-white 
hover:scale-x-50
hover:scale-y-95
transition-transform duration-1000 
        '>Login4</button>
      

<img src="./public/funny.png" className='w-56 m-20 hover:rotate-180 transition-transform duration-1000'  />

    </div>
  )
}

export default TransitionAndTransform
