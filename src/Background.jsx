import React from 'react'

const Background = () => {
  return (
    <div>
          <div
      class="bg-red-500 h-96 bg-[url(funny.png)] bg-no-repeat bg-center bg-cover"
    >
      code by step
    </div>
    <br />
    <br />
    <div
      class="bg-red-500 h-96 bg-[url(funny.png)] bg-no-repeat bg-center bg-contain"
    >
      code by step
    </div>

    <br />
    <br />
    <div
      class="gradient bg-gradient-to-t to-blue-500 from-red-500 size-96"
    ></div>
      
    </div>
  )
}

export default Background
