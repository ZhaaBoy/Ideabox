import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
    <div className='w-full h-full mt-10' id='about'>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div className='mt-15'>
    <div className='justify-center'>
        <h1 className='flex justify-center text-[35px] font-semibold text-black'>About Us</h1>
        <div className='max-w-screen-xl px-8 xl:px-16 mx-auto'>
        <div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-7">
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-normal text-orange-500">IdeaBox
              </h1>
              <p className="text-black-500 mt-4 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid amet facilis quae quisquam, itaque quaerat corporis rem, id vel provident cum ratione quam veritatis laborum impedit culpa ab ipsam! Velit!
              </p>  
            </div>
            <div className="flex w-full">
              <div className="h-full w-full">
                <Image
                alt="idea"
            
                  src="/images/about.png"
                  quality={100}
                  width={312}
                  height={83}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          </div>
    </div>
</div>

<div className='mt-15 mb-15 py-10'>
    <div className='flex justify-center mb-10'>
    <h1 className='text-[35px] font-semibold mb-10 text-black'>Timeline</h1>
    </div>
    <div className='flex justify-center'>
    <ul className="timeline">
  <li>
    <div className="timeline-start timeline-box shadow-xl">Januari</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-end timeline-box">Februari</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box shadow-xl bg-white">Maret</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-end timeline-box">April</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box shadow-xl">Mei</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-end timeline-box">Juni</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box shadow-xl">Juli</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-end timeline-box">Agustus</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start timeline-box shadow-xl">Oktober</div>
  </li>
</ul>
    </div>
</div>
    </div>
    </>
  )
}
