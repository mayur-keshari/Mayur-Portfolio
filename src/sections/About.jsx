import React, { useRef } from 'react'
import SectionHeader from '../components/SectionHeader'
import Cardsection from '../components/Cardsection'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io5'
import { RiReactjsLine } from "react-icons/ri"
import { BiLogoMongodb } from "react-icons/bi"
import { FaNodeJs } from "react-icons/fa6"
import { SiTailwindcss, SiExpress } from "react-icons/si"
import { FaChrome, FaGithubSquare } from "react-icons/fa"
import Map from '../assets/Images/MapImg.png'
import SmileEmoji from "../assets/Images/Avatar2.png"
import CardHeader from '../components/CardHeader'
import ToolboxItems from '../components/ToolboxItems'
import { motion } from "framer-motion"

const About = () => {

  const constraintref = useRef(null);

  const toolboxItems = [
    {
      title: "JavaScript",
      icontype: IoLogoJavascript,
    },
    {
      title: "HTML5",
      icontype: IoLogoHtml5,
    },
    {
      title: "CSS3",
      icontype: IoLogoCss3,
    },
    {
      title: "React",
      icontype: RiReactjsLine,
    },
    {
      title: "ExpressJS",
      icontype: SiExpress,
    },
    {
      title: "MongoDB",
      icontype: BiLogoMongodb,
    },
    {
      title: "NodeJS",
      icontype: FaNodeJs,
    },
    {
      title: "TailwindCSS",
      icontype: SiTailwindcss,
    },
    {
      title: "Chrome",
      icontype: FaChrome,
    },
    {
      title: "Github",
      icontype: FaGithubSquare,
    },
  ]


  const hobbies = [
    {
      title: "Watching Movies",
      emoji: '🍿',
      left: "5%",
      top: "5%",
    },
    {
      title: "Watching Cricket",
      emoji: '🏏',
      left: "43%",
      top: "25%"
    },
    {
      title: "Playing Games",
      emoji: "🎮",
      left: "23%",
      top: "49%"
    }
  ]

  return (
    <div className='py-20 lg:py-28' id="About">
      <div className='container'>
        <SectionHeader eyebrow="About Me" title="A Glimpse into My World" description="Learn more about who I am, what I do" />
        <div className='mt-20 flex flex-col gap-8'>
          <Cardsection className="h-[320px] md:h-[400px] lg:h-[330px] p-0">
            <CardHeader title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6" />
            <ToolboxItems Items={toolboxItems} className="mt-6 mb-6 lg:mt-3"
              ItemsWrapperClassName="move-left" />
            <ToolboxItems Items={toolboxItems}
              className="mt-6"
              ItemsWrapperClassName="move-right"
            />
          </Cardsection>
          <div className=' grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
            <Cardsection className="h-[250px] md:h-[300px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital round."
                className="px-6 py-6" />
              <div className='relative flex-1' ref={constraintref}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className='inline-flex items-center gap-2 px-6
                 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintref}
                  >
                    <span className='font-medium text-gray-950'>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Cardsection>
            <Cardsection className="h-[320px] md:h-[300px] p-0 relative md:col-span-2 lg:col-span-1">
              <img src={Map} alt="Map" className='w-full h-full object-cover object-left-top' />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-19 rounded-full
             bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline-2
             after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className='absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <img src={SmileEmoji} alt="Smile_Emoji" className='w-20 h-20 object-contain' />
              </div>
            </Cardsection>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About