import React from 'react'

const SectionHeader = ({title, eyebrow, description}) => {
    return (
        <>
        
            <div className='flex justify-center'>
                <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>
                    {eyebrow}
                </p>
            </div>
            <h2 className='text-3xl text-center mt-6 md:text-5xl' style={{ fontFamily: "'Calistoga', serif" }}>{title}</h2>
            <p className='text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl'>{description}</p>
        </>
    )
}

export default SectionHeader