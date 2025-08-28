import React from 'react'
import { IoMdStar } from 'react-icons/io'

const Tape = () => {
    const words = [
        "Performant",
        "Accessible",
        "Secure",
        "Interactive",
        "Scalable",
        "User friendly",
        "Responsible",
        "Maintainable",
        "Search Optimized",
        "Usable",
        "Reliable",
        "Performant",
        "Accessible",
        "Secure",
        "Interactive",
        "Scalable",
        "User friendly",
        "Responsible",
        "Maintainable",
        "Search Optimized",
        "Usable",
        "Reliable",
    ]
    return (
        <div className='py-16 lg:py-24 overflow-x-clip'>
            <div className='bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1'>
                <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                    <div className='flex flex-none gap-4 py-3 move-left-tape'>
                        {words.map(word => (
                            <div key={word} className='inline-flex gap-4 items-center'>
                                <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                                <IoMdStar className='text-gray-900 size-6 -rotate-12' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tape