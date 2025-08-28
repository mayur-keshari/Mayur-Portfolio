import React from 'react'
import grain_bg from "../assets/Images/grain_background.jpg"
import {twMerge} from "tailwind-merge"
const Cardsection = ({className, children}) => {
    return (
            <div
                className={twMerge("bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none p-6",className)}>
                <div className='absolute inset-0 -z-10 opacity-5' 
                style={{ backgroundImage: `url(${grain_bg})` }}></div>
                {children}
            </div>

    )
}

export default Cardsection