import React from 'react'

const MultiButton = () => {
  return (
    <div>
        <button className='btn-basic'>basic</button>
        <button className='btn-primary'>PRIMARY</button>
        <button className='btn-danger'>DANGER</button>

      
    </div>
  )
}

export default MultiButton


// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer components{

//     .btn-primary{
//         @apply bg-blue-400 rounded text-wrap hover:bg-blue-700 m-8 p-5;
//     }

//     .btn-danger{
//         @apply bg-red-900 rounded text-wrap hover:bg-blue-700 m-8 p-5;
//     }
//     .btn-basic{
//         @apply bg-green-900 rounded text-wrap hover:bg-blue-700 m-8 p-5;
//     }
// }