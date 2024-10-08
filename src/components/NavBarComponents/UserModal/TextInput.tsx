'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface TextInputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
    label: string;
    name: string;
    readOnly: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ onChange, value, id, label, name, readOnly }) => {

  const [inputFocused, setInputFocused] = useState(false)

  return (
    <div className='relative' >
        <input
            readOnly = { readOnly }
            value={value}
            onChange={onChange} 
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)} 
            id={id} className='w-full md:text-[1rem] text-[1.333rem] lg:h-[3.5rem] h-[4rem] border border-gray/25 rounded-[0.5rem] outline-none pl-[1.5rem] bg-light-white placeholder:text-gray/75 pt-[1rem]' 
            type="text" maxLength={50}
            name={name}
        />

        <motion.label
            htmlFor={id}
            className="origin-top-left absolute top-[50%] left-[1.5rem] text-gray/75 lg:text-[1rem] text-[1.333rem] font-[400] cursor-text"
            initial={{ scale: 1, y: '-50%' }}
            animate={{
            scale: inputFocused || value !== '' ? 0.7 : 1,
            y: inputFocused || value !== '' ? '-80%' : '-50%'
            }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
        >
            { label }
        </motion.label>
    </div>
  )
}

export default TextInput