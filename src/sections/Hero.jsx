import emojiImage from '../assets/Images/emoji-computer.png'
import downarrow from '../assets/Icons/down-arrow.svg'
import grain_bg from '../assets/Images/grain_background.jpg'
import { PiStarFourFill } from 'react-icons/pi'
import HeroOrbit from '../components/HeroOrbit'
import { FaCircle } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grain_bg})` }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <div className='size-[1420px] hero-ring'></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin Spinduration="6s">
          <PiStarFourFill className='text-emerald-300/20 size-8' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="50s" shouldSpin Spinduration="8s">
          <PiStarFourFill className='text-emerald-300/20 size-5' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldSpin Spinduration="3s">
          <FaCircle className='text-emerald-300/20 size-2' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin Spinduration="9s">
          <PiStarFourFill className='text-emerald-300/20 size-10' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin Spinduration="5s">
          <PiStarFourFill className='text-emerald-300 size-12' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin Spinduration="11s">
          <PiStarFourFill className='text-emerald-300 size-8' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin Spinduration="2s">
          <FaCircle className='text-emerald-300/20 size-3' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="44s" shouldSpin Spinduration="4s">
          <FaCircle className='text-emerald-300/20 size-3' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="46s" shouldSpin Spinduration="7s">
          <PiStarFourFill className='text-emerald-300/20 size-14' />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin Spinduration="5s">
          <PiStarFourFill className='text-emerald-300 size-28' />
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <img src={emojiImage} alt="Person Peeking from behind Laptop" className='size-[100px]' />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 ping-scale rounded-full'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='text-3xl text-center mt-8 tracking-wide md:text-5xl' style={{ fontFamily: "'Calistoga', serif" }}>Building Exceptional User Experiences</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>I specialized in transforming designs into  functional, high-performing
            web applications. Let's discuss your next project.
          </p>
        </div>
        <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <img src={downarrow} className='size-4 animate-[bounce_1s_infinite]'/>
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span className='shake-hand'>🖐</span>
            <span className='font-semibold'>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero