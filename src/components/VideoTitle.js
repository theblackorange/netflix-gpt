import React from 'react'

const VideoTitle = (props) => {
    const {title, overview} = props;
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-tr from black w-screen aspect-video'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-16 rounded-lg bg-opacity-80 hover:bg-opacity-70'>Play</button>
            <button className='mx-4 bg-gray-500 text-black p-4 px-16 rounded-lg bg-opacity-50 hover:bg-opacity-90'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle