import React from 'react'

export default function Showcase() {
  return (
    <>
    <div className='card py-5'>
        <h1 className='text-center text-[34px] font-bold text-black py-5'>Event</h1>
        <div className='py-5'>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-[20px] font-bold">Lorem!</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis natus nemo vitae sunt, quos, cum delectus nesciunt quas et labore perspiciatis, deserunt incidunt reprehenderit aperiam aliquam id voluptas blanditiis?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Let's Go!</button>
    </div>
  </div>
</div>
</div>
        <div className='py-5'>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div>
    

    </div>
    </>
  )
}
