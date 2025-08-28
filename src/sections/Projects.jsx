import React from 'react'
import MyPortfolio from "../assets/Images/Project1.png"
import RealEstate from "../assets/Images/Project2.png"
import Budgetly from "../assets/Images/Peoject3.png"
import { CiCircleCheck } from "react-icons/ci"
import { FiArrowUpRight } from 'react-icons/fi'
import grain_bg from '../assets/Images/grain_background.jpg'

const Projects = () => {
    const portfolioprojects = [
        {
            company: "InLighn Tech",
            year: "2025",
            title: "My-Portfolio",
            results: [
                { title: "Speed" },
                { title: "Simplicity" },
                { title: "Scalability" },
            ],
            link: "#",
            image: MyPortfolio,
        },
        {
            company: "InLighn Tech",
            year: "2025",
            title: "Budgetly",
            results: [
                { title: "Security" },
                { title: "Connectivity" },
                { title: "Scalability" },
            ],
            link: "https://budgetly-mk.netlify.app/",
            image: Budgetly,
        },
        {
            company: "Personal Project",
            year: "2025",
            title: "Real Estate Website",
            results: [
                { title: "Performance" },
                { title: "Elegance" },
                { title: "Engagement" },
            ],
            link: "https://mk-realestate-webapp.netlify.app/",
            image: RealEstate,
        }
    ]
    return (
        <section className='pb-16 lg:py-24' id="Projects">

            <div className='container'>
                <div className='flex justify-center'>
                    <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>
                        Real-World Results
                    </p>
                </div>
                <h2 className='text-3xl text-center mt-6 md:text-5xl' style={{ fontFamily: "'Calistoga', serif" }}>Featured Projects</h2>
                <p className='text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl'>See how I transformed concepts into engaging digital experiences...</p>
                <div className='flex flex-col mt-10 gap-20 md:mt-20'>
                    {
                        portfolioprojects.map(project => (
                            <div key={project.title}
                                className="bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden relative 
                                after:content-[''] after:absolute after:inset-0 
                                after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 
                                after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                                <div className='absolute inset-0 -z-10 opacity-5' style={{ backgroundImage: `url(${grain_bg})` }}></div>
                                <div className='lg:grid lg:grid-cols-2'>
                                    <div className='lg:pb-16' >
                                        <div className='bg-gradient-to-r gap-2  from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex font-bold tracking-widest uppercase text-sm'>
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 style={{ fontFamily: "'Calistoga', serif" }}
                                            className='text-2xl mt-2 md:text-4xl md:mt-5'
                                        >{project.title}</h3>
                                        <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                                        <ul className='flex flex-col gap-4 mt-4 md:mt-5'>{
                                            project.results.map((result) => (
                                                <li className='flex gap-2 text-sm text-white/50 md:text-base'>
                                                    <CiCircleCheck className='size-5 md:size-6' />
                                                    <span>{result.title}</span>
                                                </li>
                                            ))}</ul>
                                        <a href={project.link}>
                                            <button className='bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold
                                             inline-flex items-center justify-center gap-2 mt-8'>
                                                <span> Visit Live Site</span>
                                                <FiArrowUpRight className='text-black size-4 inline-flex' />
                                            </button>
                                        </a>
                                    </div>
                                    <div className='relative'>
                                        <img src={project.image} alt={project.title}
                                            className='mt-8 -mb-4 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg lg:rounded-xl outline-2 outline-white/20'
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects