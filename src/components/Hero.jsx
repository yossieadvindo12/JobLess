import React from 'react'
import Card from './Card'
import { featureJobs } from '../constants'
const Hero = () => {
    return (
        <section id='Home' className='flex min-h-screen mx-auto  items-center flex-col py-6 '>

            <p className='text-[32px] font-bold text-center mb-4'>
                Get Connected to the Best Remote <br />
                Jobs in Your Field
            </p>
            {/* <br /> */}
            <p className='text-center text-[16px] font-light placeholder mb-6'>
                Discover a wide range of remote opportunities on our platform and
                <br />
                take control of your career
            </p>
            <div className='flex-col mb-10'>
                <button className='bg-[#001AFF] rounded-xl p-[12px] text-white hover:bg-[#4755d4] mr-10'>
                    <a href="">Explore Remote Jobs</a>
                </button>
                <button>
                    <a href="" className='text-[#001AFF]'>
                        How it works?
                    </a>
                </button>
            </div>
            <div className='flex-wrap items-start w-full px-10 '>
                <h3 className='mb-4'>Features</h3>
                <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                    {featureJobs.map((features) => <Card key={features.id} {...features} />)}
                </div>
            </div>
        </section>

    )
}

export default Hero