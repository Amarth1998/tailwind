import React from 'react'

const MediaQueryandBreakPoints = () => {
  return (
    <div>
      
      <div class=" h-full sm:bg-orange-500 md:bg-blue-800  lg:bg-green-400  " ></div>
    <div class="max-w-md mx-auto bg-green-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="funny.png" alt="Modern building architecture"/>
          </div>

          <div class="p-8">

            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
           
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>

            <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaQueryandBreakPoints
