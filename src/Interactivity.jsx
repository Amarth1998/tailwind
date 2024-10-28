import React from 'react'

const Interactivity = () => {
  return (
    <>
       <button
      class="bg-blue-200 p-10 m-10 rounded hover:bg-blue-800 hover:text-white"
    >
      Login-button
    </button>

    <button class="bg-blue-200 p-10 m-10 rounded focus:bg-yellow-800">
      Login-button
    </button>

    <button class="bg-blue-200 p-10 m-10 rounded active:bg-yellow-800">
      Login-button
    </button>

    <button
      class="bg-blue-200 p-10 m-10 rounded focus:bg-yellow-800 active:bg-yellow-800 hover:bg-blue-800"
    >
      Login-button
    </button>

    <div>
      <a href="" class="group">
        <h1 class="group-hover:bg-black group-hover:text-white">heladind click</h1>
        <p>paragraph click</p>
        <p>paragraph click</p>
        <p>paragraph click</p>
        <p>paragraph click</p>
        <p>paragraph click</p>

      </a>
    </div>
    </>
  )
}

export default Interactivity
