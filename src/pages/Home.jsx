import React from 'react'
import Map from '../assets/map.png'

function Home() {
    return (
        <div className=' font-display h-dvh max-w-lg mx-auto sm:bg-black '>
            <div className='max-w-[500px] mx-auto' >
                <img className='w-full h-[500px]' src={Map} alt="" />
            </div>
            <div className='flex items-center justify-center'>
                <button className=' text-white rounded-2xl cursor-pointer bg-[#151513] py-[16px] px-[110px] font-semibold mx-auto absolute bottom-2'>Buyurtma berish</button>
            </div>
        </div>
    )
}

export default Home