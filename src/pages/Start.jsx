import React from 'react'
import Logo from '../assets/logo.webp'
import InfoIcon from '../assets/infoIcon.svg'
import BgImage from '../assets/starts-bg.png'

function Start() {
    return (
        <div className='bg-[#151513] px-[24px] py-[56px] h-screen'>
            <div className='flex justify-between items-center pb-[24px] border-[#737371] border-b'>
                <div className='flex items-center gap-[5px] text-[#F5CE55] text-[20px]'>
                    <img src={Logo} className='rounded-full w-[56px] h-[56px]' />
                    <h1>FarBesh</h1>
                </div>
                <img src={InfoIcon} />
            </div>
            <main className=' flex flex-col '>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='text-[32px] leading-[37.5px] font-[600] text-white mt-[70px]'>Taxi of your dreams</h2>
                    <p className='text-[16px] font-[500] text-white opacity-70 mt-[8px] leading-[16.5px] mb-auto'>Comfortable rides around the city</p>
                </div>
                <div style={{ backgroundImage: `url(${BgImage})` }} className=" bg-center bg-no-repeat h-[533px] w-full flex flex-col items-center justify-center mb-0">
                    <button type="submit" className="pt-[18.5px] pb-[18.5px] rounded-[16px] mt-auto bg-gradient-to-r from-[#E9BC32] to-[#FFDC71]  w-full">
                        Open application
                    </button>
                    <p className='text-[16px] font-[500] text-white opacity-70  leading-[16.5px] mt-[24px]'>Create new account</p>
                </div>
            </main>
        </div>
    )
}

export default Start