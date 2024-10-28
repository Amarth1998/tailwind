import React from 'react'

const DialogBox = () => {
  return (
    <>

<div className='bg-gray-500 fixed inset-0'>

<div className="fixed inset-0 ">
    <div className="flex h-full justify-center items-center">

 <div className="bg-white w-[512px] text-left shadow-xl rounded relative">
    <div className="p-5 ">  
        <div className="flex items-start ">
            <img src="./public/funny.png " className='w-20' alt="" srcset="" />
            <div className='ml-4' ><h3 className='font-bold'>Deactivate account</h3>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magni.</p>
        </div>
        
        </div>

        <div className="bg-gray-50 flex  px-4 py-3 flex-row-reverse ">
            <button className='bg-red-600 text-white p-2 mx-2 rounded  border-1 border-gray-100 hover:scale-105'>Deactivate</button>

            <button className=' border-gray-400 px-4 mx-2 rounded border-2 text-gray-400 hover:scale-105 ' > Cancle</button>

        </div>
       
    </div>
 </div>
    </div>

</div>


</div>
      


    </>
  )
}

export default DialogBox
