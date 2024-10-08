'use client'

import React, { useState } from 'react'

import { useCurrencyStore } from '@/hooks/useCurrencyStore'
import useStore from '@/hooks/useStore'
import { usePathname } from 'next/navigation'

const CurrencyPicker = () => {

  const[isHovered, setIsHovered] = useState(false)

  const currency = useStore(useCurrencyStore, (state) => state.currency)
  const setCurrency = useCurrencyStore((state) => state.setCurrency)

  const pathname = usePathname()

  return (
    <div 
        className='relative flex items-center gap-[0.25rem] cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <p className={`uppercase text-[1rem] font-bold font-open-sans xl:text-dark-gray ${pathname.split('/')[2] !== 'admin' ? 'text-light-white' : 'text-dark-gray'}`}>{ currency }</p>
        <img src="/icons/icon-arrow.svg" alt="arrow" className={`size-[1rem] ${pathname.split('/')[2] !== 'admin' && 'max-xl:hidden'}`} draggable={false} />
        <img src="/icons/icon-arrow-white.svg" alt="arrow" className={`size-[1rem] ${pathname.split('/')[2] !== 'admin' && 'xl:hidden'}`} draggable={false} />

        {
            isHovered && (
                <div className='absolute top-[100%] pt-[0.5rem] left-[50%] -translate-x-[50%] flex flex-col items-center shadow-custom'>
                    <div className='bg-[#FFF] p-[0.25rem] flex flex-col items-center rounded-[0.5rem]'>
                        <p className='hover:bg-gray/10 w-full text-center leading-[2.5] px-[0.75rem] rounded-[0.5rem] transition-colors duration-300' onClick={() => setCurrency('EUR')}>EUR</p>
                        <p className='hover:bg-gray/10 w-full text-center leading-[2.5] px-[0.75rem] rounded-[0.5rem] transition-colors duration-300' onClick={() => setCurrency('MDL')}>MDL</p>
                        <p className='hover:bg-gray/10 w-full text-center leading-[2.5] px-[0.75rem] rounded-[0.5rem] transition-colors duration-300' onClick={() => setCurrency('CHF')}>CHF</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default CurrencyPicker