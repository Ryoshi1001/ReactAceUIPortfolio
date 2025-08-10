"use client"
import { Vortex } from '../components/ui/vortex'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'
import { words } from '../data'
import { FaLocationArrow } from 'react-icons/fa6'

const HeroSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-[calc(100%)] mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <div className='flex flex-col items-center justify-center max-w-[89vw] md:max-w-7xl lg;max-w-[60vw]'>

            <TextGenerateEffect
              className="text-[38px] md:text-5xl lg:text-6xl text-center"
              words={words} />;
              <a href="#websites">
                <button className="mt-10 relative inline-flex h-12 overflow-hidden rounded-lg  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl rounded-lg">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <span>View My Work</span>
                      <FaLocationArrow />
                    </div>
                  </span>
                </button>
              </a>
          </div>

        </Vortex>
      </div>
    </div>
  )
}

export default HeroSection


