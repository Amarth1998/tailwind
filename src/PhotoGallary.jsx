import React from 'react'

const PhotoGallary = () => {
  return (
    <>
    {/* <pre>
    • Display Images

• Add container class as wrapper

• Add style classes to images

• Add Animation classes with hover

• Make custom eláss for all style classes

• Interview Question

• How to add brightness in core css
    </pre> */}
{/* 
<div className='container mx-auto flex-wrap flex gap-2   justify-around '> 

<img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-125 rounded border-2 border-blue-300 hover:border-blue-50' />

<img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' /><img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' /><img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' /><img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' /><img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' /><img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' /><img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' /><img src="./public/funny.png" className='w-80 hover:scale-110 transition duration-1000 hover:brightness-75 rounded border-2 border-blue-300 hover:border-blue-50' />



</div> */}



<div className='container mx-auto mt-10 flex-wrap flex gap-2   justify-around '> 

<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />
<img src="./public/funny.png" className='card' />

</div>

      
    </>
  )
}

export default PhotoGallary



// index.css
// custom class
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer components{
//     .card {
//         @apply w-80 hover:scale-110 transition duration-1000 hover:brightness-125 rounded border-2 border-blue-300 hover:border-blue-50;
//     }
// }
