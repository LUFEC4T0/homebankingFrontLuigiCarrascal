import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-around intems-center w-screen h-20 bg-indigo-500'>
        <div className='flex items-center'>
            <span className='text-white'>© 2024 Luigi Carrascal</span>
        </div>
        <div className='flex items-center gap-[1rem]'>
            <img src="/facebook_icon.png" alt="Facebook logo" />
            <img src="/instagram_icon.png" alt="Instagram logo" />
            <img src="/whatsapp_icon.png" alt="Whatsapp logo" />
        </div>
    </div>
  )
}

export default Footer
