import React from 'react'

const Body = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <img src="./src/assets/Blue-Shape.svg" alt="blue" className='-rotate-45 h-64'/>
        <img src="./src/assets/Purple-Shape.svg" alt="purple" className='absolute -rotate-[30deg] h-64' />
        <img src="./src/assets/Pink-Shape.svg" alt="pink" className='absolute -rotate-[15deg] h-64' />
        <img src="./src/assets/Hero-Model.png" alt="modelImg" className='absolute h-64' />
      </div>
      <div className='flex flex-col space-y-5'>
        <h1 className='font-bold text-4xl leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='text-gray-400'>With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
        <form className='space-y-5'>
          <div className='flex gap-4'>
          <input type="email" name="email" id="email" placeholder="Enter Your Email" className='rounded-md px-4 py-3 placeholder:text-gray-400'/>
          <button className='bg-blue-400 text-white px-2.5 py-1.5 rounded-2xl text-sm hover:bg-blue-700'>Join Waitlist</button>
          </div>
          <div className='flex gap-3'>
            <img src="./src/assets/Checkmark.svg" alt="check" />
            <p>No spam, ever Unsubscribe anytime</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Body