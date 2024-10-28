import React from 'react'

const ListFlex = () => {
  return (
    <div>
       <ul class="bg-black text-white  flex [&>*]:flex " >
     
     <li  class=" ">
 <a class= " hover:text-orange-200 p-3" href="#" >home</a>
 </li>

 <li  class=" ">
     <a class= " hover:text-orange-200 p-3" href="#" >home</a>
     </li>    <li  class=" ">
         <a class= " hover:text-orange-200 p-3" href="#" >home</a>
         </li>    <li  class=" ">
             <a class= " hover:text-orange-200 p-3" href="#" >home</a>
             </li>    <li  class=" ">
                 <a class= " hover:text-orange-200 p-3" href="#" >home</a>
                 </li>
   
 </ul>
    </div>
  )
}

export default ListFlex
