import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Footer = () => {

  const footerlinks = [
    {
      title:"Whatsapp",
      href:"https://wa.me//918938823568",
    },
    {
      title:"Instagram",
      href:"https://instagram.com/_m.a.y.u.r_27",
    },
    {
      title:"LinkedIn",
      href:"https://www.linkedin.com/in/mayur-keshari/",
    },
    {
      title:"Github",
      href:"https://github.com/mayur-keshari",
    },
  ]
  return (
    <footer className="relative mt-15">
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
       [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className='container'>
        <div className='border-t border-white/15 py-10 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8 z-10'>
            {footerlinks.map(link => (
              <a href={link.href} key={link.title} className='inline-flex items-center gap-1.5 cursor-pointer z-10'>
                <span className='font-semibold'>{link.title}</span>
                <FiArrowUpRight className='size-4'/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer