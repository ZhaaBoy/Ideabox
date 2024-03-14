import React from 'react'

export default function Card() {
  return (
    <>
    <div className="grid place-items-center w-full ">
            <div className="max-w-6xl px-4 content-center justify-center">
                
                <div className="grid mt-12 grid-cols-1 gap-8">
                            <div className="card w-full bg-white shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img className="mask w-20 h-20 mask-circle object-cover" src="/images/user/user-01.png" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus incidunt, eius provident earum tempore temporibus inventore perspiciatis amet iusto, at aliquam molestiae voluptates non autem, architecto quasi nulla nesciunt.</p>
                                    <p className="text-slate-500">-Usup</p>
                                </div>
                                </div>
                
            </div>
            </div>
        </div>
    </>
  )
}
