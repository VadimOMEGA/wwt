'use client'

import { useLocale, useTranslations } from "next-intl"
import { useState } from "react"
import { motion } from "framer-motion"


interface SignUpProps{
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
    setModalContent : React.Dispatch<React.SetStateAction<"LogIn" | "SignUp" | "EmailSent">>
}

const SignUp:React.FC<SignUpProps> = ({ setIsOpen, setModalContent }) => {

  const t = useTranslations('SignUpModal')

  const [formData, setFormData] = useState({
    firstName : '',
    lastName : '',
    email: '',
  })

  const locale = useLocale()

  const [firstNameFocus, setFirstNameFocus] = useState(false)
  const [lastNameFocus, setLastNameFocus] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [mouseHover, setMouseHover] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                lang: locale,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Email Sent")
            setIsOpen(false)
        } else {
            console.log(data.msg, "  Something went wrong");
        }
    } catch (error) {
        console.log("An unexpected error occurred. Please try again.");
    }
};

  return (
    <div className='py-[4rem] px-[3rem] relative'>
        <img src="/icons/icon-close.svg" alt="close" draggable={false} className='absolute right-[1rem] top-[1rem] size-[2rem] cursor-pointer' onClick={() => setIsOpen(false)}/>
        <h3 className='text-dark-gray uppercase font-montserrat font-bold text-[1.5rem] text-center leading-[0.7]'>{ t('createAccTitle') }</h3>
        <div className='bg-red h-[2px] w-[3rem] mt-[1rem] mx-auto'/>
        <p className='text-dark-gray font-open-sans font-[400] text-[1.125rem] text-center mt-[1rem]'>{ t('message') }</p>

        <form className='mt-[2rem] w-full' onSubmit={handleSubmit}>
          <div className="relative">
            <input id="signUpFormLastName" name="lastName" onFocus={() => setLastNameFocus(true)} onBlur={() => setLastNameFocus(false)} value={formData.lastName} onChange={handleChange} className='w-full h-[3.5rem] border border-gray/25 rounded-[0.5rem] outline-none px-[1.5rem] text-dark-gray font-open-sans text-[1rem] font-[400] pt-[1rem]' required type="text"/>

            <motion.label
              htmlFor='signUpFormLastName'
              className="origin-top-left cursor-text absolute top-[50%] left-[1.5rem] text-gray/75 lg:text-[1rem] text-[1.333rem] font-[400]"
              initial={{ scale: 1, y: '-50%' }}
              animate={{
                scale: lastNameFocus || formData.lastName !== '' ? 0.7 : 1,
                y: lastNameFocus || formData.lastName !== '' ? '-80%' : '-50%'
              }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
            >
              { t('last-name') }
            </motion.label>
          </div>

          <div className="relative mt-[1rem]">
            <input id="signUpFormFirstName" name="firstName" onFocus={() => setFirstNameFocus(true)} onBlur={() => setFirstNameFocus(false)} value={formData.firstName} onChange={handleChange} className='w-full h-[3.5rem] border border-gray/25 rounded-[0.5rem] outline-none px-[1.5rem] text-dark-gray font-open-sans text-[1rem] font-[400] pt-[1rem]' required type="text"/>

            <motion.label
              htmlFor='signUpFormFirstName'
              className="origin-top-left cursor-text absolute top-[50%] left-[1.5rem] text-gray/75 lg:text-[1rem] text-[1.333rem] font-[400]"
              initial={{ scale: 1, y: '-50%' }}
              animate={{
                scale: firstNameFocus || formData.firstName !== '' ? 0.7 : 1,
                y: firstNameFocus || formData.firstName !== '' ? '-80%' : '-50%'
              }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
            >
              { t('first-name') }
            </motion.label>
          </div>

          <div className="relative mt-[1rem]">
            <input id="signUpFormEmail" name="email" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} value={formData.email} onChange={handleChange} className='w-full h-[3.5rem] border border-gray/25 rounded-[0.5rem] outline-none px-[1.5rem] text-dark-gray font-open-sans text-[1rem] font-[400] pt-[1rem]' required type="text"/>

            <motion.label
              htmlFor='signUpFormEmail'
              className="origin-top-left cursor-text absolute top-[50%] left-[1.5rem] text-gray/75 lg:text-[1rem] text-[1.333rem] font-[400]"
              initial={{ scale: 1, y: '-50%' }}
              animate={{
                scale: emailFocus || formData.email !== '' ? 0.7 : 1,
                y: emailFocus || formData.email !== '' ? '-80%' : '-50%'
              }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
            >
              { t('email') }
            </motion.label>
          </div>

            <input type="submit" value={ t('sign-up') } className='bg-red hover:bg-dark-red transition-colors duration-300 w-full h-[3.5rem] rounded-[0.5rem] text-light-white text-[1.125rem] font-bold font-open-sans mt-[2rem] cursor-pointer'/>
        </form>

        <p className='font-open-sans text-gray text-[1.125rem] font-[400] text-center mt-[2rem]'>
            <span className='text-dark-gray'>{ t('question') }</span> &nbsp;
            <span onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)} className="relative">
              <span onClick={() => setModalContent('LogIn')} className='cursor-pointer'>{ t('log-in') }</span>
              <motion.div 
                className="absolute bottom-[15%] left-0 w-full h-[1px] bg-gray/75 origin-left"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: mouseHover ? [0, 1] : 1 }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.3 }}
              />
            </span>
        </p>
    </div>
  )
}

export default SignUp