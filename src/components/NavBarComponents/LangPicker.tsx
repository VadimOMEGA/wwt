'use client'

import { Link } from '@/navigation';

import {useSelectedLayoutSegment} from 'next/navigation';

import { useLocale } from 'next-intl';
import { useState } from 'react';

const LangPicker = () => {

    const [isHovered, setIsHovered] = useState(false)

    const locale = useLocale();
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const nolLocalePathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    
  return (
    <div 
        className='relative flex items-center gap-[0.25rem] cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <p className='uppercase text-[1rem] font-bold'>{ locale }</p>
        <img src="/icons/icon-arrow.svg" alt="arrow" draggable={false} />

        {
            isHovered && (
                <div className='absolute top-[100%] pt-[0.5rem] left-[50%] -translate-x-[50%] flex flex-col items-center'>
                    <div className='bg-[#FFF] p-[0.25rem] flex flex-col items-center rounded-[0.5rem]'>
                        <Link href={nolLocalePathname} locale='ro' className='hover:bg-gray/10 w-full text-center leading-[2.5] px-[0.75rem] rounded-[0.5rem] transition-colors duration-300'>Română</Link>
                        <Link href={nolLocalePathname} locale='ru' className='hover:bg-gray/10 w-full text-center leading-[2.5] px-[0.75rem] rounded-[0.5rem] transition-colors duration-300'>Русский</Link>
                        <Link href={nolLocalePathname} locale='en' className='hover:bg-gray/10 w-full text-center leading-[2.5] px-[0.75rem] rounded-[0.5rem] transition-colors duration-300'>English</Link>
                        <Link href={nolLocalePathname} locale='fr' className='hover:bg-gray/10 w-full text-center leading-[2.5] px-[0.75rem] rounded-[0.5rem] transition-colors duration-300'>Français</Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default LangPicker