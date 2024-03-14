import React from 'react'

export default function Showcase() {
  return (
    <>
    <div className='w-full h-full py-10'>
      <h1 className='text-center mb-10 text-[35px] text-black font-semibold'>Showcase</h1>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className='font-bold text-[17px] text-black'>Materi</th>
        <th className='font-bold text-[17px] text-black'>Jadwal</th>
        <th className='font-bold text-[17px] text-black'>Tempat</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div>
            <h1 className='font-bold text-[10px]'>PASSIONPRENEUR!</h1>
          </div>
            <span>Speaker: </span>
          <div className="flex items-center gap-3 grid-cols-2 col-auto">
            <div className="avatar col-2">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/images/user/user-01.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
          <div className="flex items-center gap-3 grid-cols-2 col-auto">
            <div className="avatar col-2">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/images/user/user-01.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className='text-black'>
        Thursday, February 9, 2023 4:00PM (WIB)
        </td>
        <td className='text-black'>Sarinah</td>
        <th>
          <button className="btn bg-orange-500 text-white hover:bg-orange-400 outline-0">Watch</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <td>
          <div>
            <h1 className='font-bold text-[10px]'>PASSIONPRENEUR!</h1>
          </div>
            <span>Speaker: </span>
          <div className="flex items-center gap-3 grid-cols-2 col-auto">
            <div className="avatar col-2">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/images/user/user-01.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
          <div className="flex items-center gap-3 grid-cols-2 col-auto">
            <div className="avatar col-2">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/images/user/user-01.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className='text-black'>
        Thursday, February 9, 2023 4:00PM (WIB)
        </td>
        <td className='text-black'>Sarinah</td>
        <th>
          <button className="btn bg-orange-500 text-white hover:bg-orange-400 outline-0">Watch</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <td>
          <div>
            <h1 className='font-bold text-[10px]'>PASSIONPRENEUR!</h1>
          </div>
            <span>Speaker: </span>
          <div className="flex items-center gap-3 grid-cols-2 col-auto">
            <div className="avatar col-2">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/images/user/user-01.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
          <div className="flex items-center gap-3 grid-cols-2 col-auto">
            <div className="avatar col-2">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/images/user/user-01.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className='text-black'>
        Thursday, February 9, 2023 4:00PM (WIB)
        </td>
        <td className='text-black'>Sarinah</td>
        <th>
          <button className="btn bg-orange-500 text-white hover:bg-orange-400 outline-0">Watch</button>
        </th>
      </tr>
      {/* row 4 */}

    </tbody>
    {/* foot */}    
  </table>
</div>
    </div>
    </>
  )
}
