import { useTranslations } from "next-intl"
import ParcelForm from "./ParcelForm"

import ItineraryMap from "@/components/SharedComponents/ItineraryMap"
import { parcelCoordinates } from "@/constants/coordinates"


const ParcelInfo = () => {

  const t = useTranslations("Services")

  return (
    <div className='max-w-[81rem] w-full mx-auto rounded-[1rem] bg-light-white border border-[#DADBDD] overflow-hidden mt-[3rem] flex lg:flex-row flex-col'>

        <div className="lg:w-[50%] w-full md:px-[4rem] md:py-[3rem] xs:p-[2rem] p-[1rem]">
            <div className='flex items-end w-full'>
                <img src="/icons/passenger-info-icons/icon-weight.svg" alt="info-icon" draggable={false} className='md:size-[4rem] size-[2.667rem] md:mr-[1.5rem] mr-[0.667rem]' />
                <p className='whitespace-nowrap  font-bold md:text-[1.5rem] text-[1.333rem] text-dark-gray font-open-sans leading-[0.7] mr-[0.5rem]'>1 KG</p>
                <span className='w-full overflow-hidden whitespace-nowrap text-ellipsis leading-[0.8] text-[1.5rem] mr-[0.5rem]'>.......................................................................................................................................................................................................</span>
                <p className='font-bold md:text-[2.5rem] xs:text-[2rem] text-[1.5rem] text-dark-gray font-open-sans leading-[0.7] whitespace-nowrap'>2 CHF</p>
            </div>

            <p className="md:text-[1.125rem] text-[1.167rem] text-dark-gray font-[500] md:mt-[1.5rem] mt-[1.333rem] font-open-sans">
                <span className="text-red font-[500]">*</span> { t('parcelInfoText1') } <br /> <br />
                <span className="text-red font-[500]">*</span> { t('parcelInfoText2') }
            </p>

            <ParcelForm />
        </div>

        <div className="lg:w-[50%] max-lg:w-full max-lg:h-[26rem]">
          <ItineraryMap coordinates={parcelCoordinates} center={[parcelCoordinates[0].latitude, parcelCoordinates[0].longitude]}/>
        </div>

    </div>
  )
}

export default ParcelInfo