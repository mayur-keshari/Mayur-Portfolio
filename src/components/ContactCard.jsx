import React from 'react'
import grain_bg from '../assets/Images/grain_background.jpg'
import { GoX } from 'react-icons/go'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa6'
import ContactIcon from './ContactIcon'


const ContactCard = ({ displaycard, toggledisplay }) => {

  const socialContact = [
    {
      title: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/_m.a.y.u.r_27",
    },
    {
      title: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mayur-keshari/",
    },
    {
      title: "Whatsapp",
      icon: FaWhatsapp,
      href: "https://wa.me//918938823568",
    },
    {
      title: "Github",
      icon: FaGithub,
      href: "https://github.com/mayur-keshari",
    },
  ]

  return (
    <>
      {
        displaycard && (
          <div className='h-screen w-full fixed top-0 left-0 z-20 backdrop-blur-md lg:backdrop-blur-lg'>
            <div className='fixed top-[12%] left-[75%] -translate-x-1/2 -translate-y-1/2 rounded-xl md:top-1/2 md:left-1/2
            '>
              <div className=' relative h-[200px] md:min-w-lg lg:min-w-2xl w-45 outline-2 bg-gray-800/90 rounded-xl outline-white/50 py-2 px-3 
             overflow-hidden shadow-[-3px_3px_32px] shadow-gray-800/80 flex flex-col gap-4 md:py-4 md:px-6 md:h-[110px] lg:h-[130px] lg:shadow-[-10px_8px_50px]'>
                <div className='absolute inset-0 -z-10 opacity-50' style={{ backgroundImage: `url(${grain_bg})` }}></div>
                <div className='flex items-center justify-between'>
                  <h4 style={{ fontFamily: "'Calistoga', serif" }} className='text-md md:text-xl'>Contact Me</h4>
                  <GoX className='text-white/50 size-4 font-extrabold cursor-pointer md:size-6' onClick={toggledisplay} />
                </div>
                <div className='px-3 flex flex-col mx-auto gap-3 md:flex-row justify-center md:gap-4 md:mx-auto lg:gap-10'> 
                  {
                    socialContact.map(Contact => (
                      <div key={Contact.title}>
                        <ul>
                          <li>
                            <div className='flex items-center gap-2'>
                              <span>
                                <ContactIcon Icon={Contact.icon}/>
                              </span>
                              <a href={Contact.href}>
                                <p className='text-white/50 text-sm md:text-md'>{Contact.title}</p>
                              </a>
                            </div>
                          </li>

                        </ul>

                      </div>

                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ContactCard