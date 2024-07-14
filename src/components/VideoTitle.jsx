import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="py-64 pl-24 text-white absolute w-screen">
        <h1 className='text-3xl font-bold p-3 m-3'>{title}</h1>

        <p className='w-1/3 p-3 m-3 font-bold'>{overview}</p>
        
        <div className='flex m-3'>
            <button className='bg-gray-500  text-white py-3 px-4 ml-3 mr-3 rounded'>Play</button>

            <button className='bg-gray-500 text-white  p-3 mr-3 rounded' >More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle;