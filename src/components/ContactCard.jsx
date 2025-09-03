import React, { useState } from 'react'
import grain_bg from '../assets/Images/grain_background.jpg'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa6'
import { PiStarFourFill } from 'react-icons/pi'
import {FaLocationDot} from "react-icons/fa6"
import {FaPhoneAlt} from "react-icons/fa"
import {IoIosMail} from "react-icons/io"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const ContactCard = () => {

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

  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [Contact,setContact] = useState("")
  const [Message,setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://mayur-portfolio-backend-1.onrender.com/api/query",{name,email,Contact,Message});
      if(res.data.success){
        setname("");
        setemail("");
        setContact("");
        setMessage("");
        toast.success("Your query is Submitted");
      }else{
         setname("");
        setemail("");
        setContact("");
        setMessage("");
        toast.error("Failed to submit query");
      }
    } catch (error) {
        setname("");
        setemail("");
        setContact("");
        setMessage("");
        toast.error("Failed to submit query");
    }
  }

  return (
    <>
      <div className='container mt-20'  id="Contact">
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>
            Contact Me
          </p>
        </div>
        <h2 className='text-3xl text-center mt-6 md:text-5xl' style={{ fontFamily: "'Calistoga', serif" }}>Get in Touch</h2>
        <p className='text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl'>Let's connect and create something impactful together...</p>
        <div
          className="bg-gradient-to-bl from-emerald-300 to-sky-400 rounded-3xl z-0 after:z-0 overflow-hidden relative 
                     after:content-[''] after:absolute after:inset-0 
                     after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20
                     after:pointer-events-none mt-[50px] flex justify-center flex-col md:flex-row">
          <div className='relative md:w-[50%] z-0 py-8 px-10'>
            <div className='absolute inset-0 opacity-7 -z-10' style={{ backgroundImage: `url(${grain_bg})` }}></div>
                <div className='flex w-full gap-3'>
                      <h3 className='flex justify-center mb-8 md:text-3xl text-2xl text-gray-900' style={{ fontFamily: "'Calistoga', serif" }}>Contact Information</h3>
                </div>
              <hr className='border-t-2 border-gray-900/50 -mt-2' />
              <div className='flex flex-col gap-5 md:gap-8  mt-8 md:px-3'>
                <div  className='flex gap-3 text-gray-950 lg:flex-row md:flex-col md:items-center'>
                 <FaLocationDot className='size-7 '/>
                 <p className='sm:tracking-wider'>75, Street no.1, Near Power House, Industrial Area, Haridwar (Uttarakhand), India</p>
                </div>
                <div className='flex lg:flex-row md:flex-col md:items-center items-center gap-3 text-gray-950'>
                 <IoIosMail className='size-7'/>
                 <p className='sm:tracking-wider text-[0.8rem] sm:text-lg'>mayurkesharimk027@gmail.com</p>
                </div>
                <div className='flex gap-3 text-gray-950 lg:flex-row md:flex-col md:items-center items-center'>
                 <FaPhoneAlt className='sm:size-7'/>
                 <p className='sm:tracking-wider '>+91 89388-23568</p>
                </div>
              </div>

              <div className='flex justify-center lg:gap-8 md:gap-3 gap-5 md:mt-50 mt-25 px-3'>
                {
                  socialContact.map((contact)=>(
                      <a href={contact.href} key={contact.title}>
                        <contact.icon className="lg:size-12 sm:size-10 size-8 text-gray-950"/>
                      </a>
                  ))
                  
                }

              </div>
          </div>
          <div className='md:w-[50%] flex flex-col justify-center border-l-3 border-white/20 rounded-3xl py-8 px-10 bg-gray-800 -z-10' >
            <div className='absolute inset-0 opacity-5 -z-10' style={{ backgroundImage: `url(${grain_bg})` }}></div>
            <div className='flex w-full gap-3'>
              <PiStarFourFill className='md:size-10 size-9 text-emerald-300' />
              <h3 className='mb-8 md:text-3xl text-2xl border-white/20' style={{ fontFamily: "'Calistoga', serif" }}>Contact Form</h3>
            </div>
            <hr className='border-t-2 border-white/5 -mt-2 ' />
            <form className='w-full flex flex-col mt-8 gap-6 md:gap-10' onSubmit={handleSubmit}>
              <Toaster position='top-right'/>
              <div className='flex flex-col '>
                <label className='mb-3 md:text-xl text-lg tracking-wide text-white/80' style={{ fontFamily: "'Calistoga', serif" }}>Name</label>
                <input type="text" placeholder="Enter Your Name" className='border-white/20 border-3
                           rounded-2xl w-full py-2 px-3 md:text-lg outline-none
                           placeholder:text-white/20 placeholder:font-semibold text-white/50 shadow-2xl'
                           name='name'
                           value={name}
                           onChange={(e)=>setname(e.target.value)}/>
              </div>
              <div className='flex flex-col '>
                <label className='mb-3 md:text-xl text-lg tracking-wide text-white/80' style={{ fontFamily: "'Calistoga', serif" }}>Email</label>
                <input type="email" placeholder="Enter Your Email"
                  className='border-white/20 border-3
                           rounded-2xl w-full py-2 px-3 md:text-lg outline-none
                           placeholder:text-white/20 placeholder:font-semibold text-white/50 shadow-2xl'
                           name='email'
                           value={email}
                           onChange={(e)=>setemail(e.target.value)}/>
              </div>
              <div className='flex flex-col'>
                <label className='mb-3 md:text-xl text-lg tracking-wide text-white/80' style={{ fontFamily: "'Calistoga', serif" }}>Contact</label>
                <input type="tel" placeholder="Your Contact Number"
                pattern='[0-9]{10}'
                  className='border-white/20 border-3
                           rounded-2xl w-full py-2 px-3 md:text-lg outline-none
                           placeholder:text-white/20 placeholder:font-semibold text-white/50 shadow-2xl'
                           name='Contact'
                           value={Contact}
                           onChange={(e)=>setContact(e.target.value)}/>
              </div>
              <div className='flex flex-col'>
                <label className='mb-3 md:text-xl text-lg tracking-wide text-white/80' style={{ fontFamily: "'Calistoga', serif" }}>Message</label>
                <textarea type="text"
                  className='border-white/20 border-3
                           rounded-2xl w-full py-2 px-3 md:text-lg outline-none
                           placeholder:text-white/20 placeholder:font-semibold text-white/50 shadow-2xl'
                           name='Message'
                           value={Message}
                           onChange={(e)=>setMessage(e.target.value)}></textarea>
              </div>
              <button className='cursor-pointer bg-white rounded-2xl py-4 font-semibold text-gray-950 md:text-xl  border-none shadow-2xl' >Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCard
