import TypeWriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import FullPageHeaderImage from '../img/FullPageHeaderImage'

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between h-[1200px]  px-6 text-main_font_color">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl leading-[1.3]">
          Hello,
          <br />
          my name is Jinho Chon!
        </h1>
        <div className="flex  items-center mt-2">
          <div>
            <h2 className="text-3xl">I enjoy creating web&nbsp;</h2>{' '}
          </div>
          <div className="">
            <TypeWriter
              options={{
                strings: ['experiences', 'applications', 'astronauts?'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'font-bold text-3xl',
                cursorClassName: 'text-3xl',
              }}
            />
          </div>
        </div>
        <div>
          <button className="text-main_font_color font-bold mt-12 flex items-center justify-center space-x-1 bg-second_accent px-8 py-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>View My Resume.</span>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: 500 }}
        animate={{
          x: [0, 10, 15, 10, 0, -10, -15, -10],
          y: [0, -10, -25, -10, 0, 10, 25, 10],
          opacity: 1,
        }}
        transition={{ duration: 4, type: 'sping', repeat: Infinity }}
        className="hidden md:block relative"
      >
        <FullPageHeaderImage className="absolute md:w-[370px] lg:w-[450px] xl:w-[500px] 2xl:w-[640px] top-0 right-0" />
      </motion.div>
    </header>
  )
}

export default Header
