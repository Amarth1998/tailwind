import React from 'react'

const Dropdown = () => {
  return (
    <>

  <div className='group m-20'>      

        <div className=' hover:text-blue-700 cursor-pointer'>City List</div>
<div className='hidden group-hover:block bg-red-400 w-32'>
    <ul>
        <li><a href="mumbai">mumbai</a></li>
        <li><a href="mumbai">mumbai</a></li>
        <li><a href="mumbai">mumbai</a></li>
        <li><a href="mumbai">mumbai</a></li>
        <li><a href="mumbai">mumbai</a></li>
    </ul>
</div>
        
</div> 

    </>
  )
}

export default Dropdown
