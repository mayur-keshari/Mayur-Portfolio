import React from 'react'

const ContactIcon = ({Icon}) => {
  return (
    <>
      <Icon className="size-6 md:size-7 lg:size-9 fill-[url(#tech-icon-gradient)]"/>
        <svg className='size-0 absolute'>
            <linearGradient id="tech-icon-gradient">
               <stop offset="0%" stopColor='rgb(110 231 183)'/>
               <stop offset="100%" stopColor='rgb(56 189 248)'/>
            </linearGradient>
        </svg>
    
    </>
  )
}

export default ContactIcon