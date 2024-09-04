'use client'

import Loader from "@/components/SharedComponents/Loader"
import '@/styles/loader.css'
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { RemoveScrollBar } from "react-remove-scroll-bar"
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import {zeroRightClassName,fullWidthClassName, noScrollbarsClassName} from 'react-remove-scroll-bar';


const template = ({ children }: { children: React.ReactNode }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [showPage, setShowPage] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    setShowChat(false)
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 1500)

    setTimeout(() => {
      setShowChat(true)
    }, 2300)
  }, [])

  return (
    <div>
        <AnimatePresence>
            {
                isLoading && <Loader />
            }
        </AnimatePresence>
        { children }
        {
          showChat &&
              <TawkMessengerReact
                propertyId="66d5add7ea492f34bc0cbf89" 
                widgetId="1i6pau4mq"
              />
          }
    </div>
  )
}

export default template