import React from 'react'

const CustomClasses = () => {
  return (
    <div>
      
      <button className='bg-blue-600 m-4 p-4 text-white hover:bg-blue-900' >button</button>
      
      <button className='btn-primary'>submit</button>
      <button className='btn-primary'>login</button>

    </div>
  )
}

export default CustomClasses

//index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer components{
//     .btn-primary{
//         @apply bg-blue-400 rounded text-wrap hover:bg-blue-700 m-8 p-5;
//     }
// }