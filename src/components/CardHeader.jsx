import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import { twMerge } from 'tailwind-merge'

const CardHeader = ({title, description, className}) => {
    return (
        <div className={twMerge('flex flex-col p-6 md:py-8 md:px-10',className)}>
            <div className='inline-flex items-center gap-2'>
                <PiStarFourFill className='size-9 text-emerald-300' />
                <h3 style={{ fontFamily: "'Calistoga', serif" }}
                    className='text-3xl'>{title}</h3>
            </div>
            <p className='text-sm lg:text-base max-w-xs lg:mt-2 text-white/60'>
            {description}
            </p>
        </div>
    )
}

export default CardHeader