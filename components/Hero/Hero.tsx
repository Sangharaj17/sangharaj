import React from 'react'
import Image from 'next/image'
import './style.css'
import Link from 'next/link'
function Hero() {
    return (
        <div className='md:ml-12 w-full flex md:flex-row flex-col-reverse md:items-center items-start md:p-10 md:pt-20 p-4 gap-6 pb-10'>
            <div className='flex flex-col md:pl-10 md:gap-6 gap-4 md:w-1/2 w-full'>
                <h1 className='font-bold md:text-5xl text-3xl'>Hi, I Am <br /> Sangharaj Jadhav</h1>
                <div className='md:text-base text-sm text-gray-600'>
                    With over three years of dedicated experience as a product designer, I've specialized in crafting captivating user interfaces that seamlessly blend form and function.
                </div>
                <div className='flex w-full items-center gap-8'>
                    <Link href='' className='md:text-lg text-sm bg-blue-600 text-white p-4 px-6 rounded-lg'>
                        About me
                    </Link>
                    <Link href='' className='md:text-lg text-sm p-4 border rounded-lg'>
                        Projects
                    </Link>
                </div>
                <div className='flex items-center w-full py-6 gap-10'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-4xl font-bold'>
                            10+
                        </div>
                        <div className='text-sm text-gray-600'>
                            Projects Worked on
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-4xl font-bold'>
                            4+
                        </div>
                        <div className='text-sm text-gray-600'>
                            Live Projects
                        </div>
                    </div>
                    {/* <div className='flex flex-col gap-2'>
                    <div className='text-4xl font-bold'>
                        iamsangharaj@gmail.com
                    </div>
                    <div className='text-sm text-gray-600'>
                        Contact
                    </div>
                </div> */}
                </div>
            </div>
            <div className='flex flex-col md:items-center  gap-6 md:w-1/2 w-full md:h-auto '>
                <Image
                    src="/hero.png"
                    width={500}
                    height={500}
                    alt="ZenCoder"
                    className='rounded-3xl h-full object-cover'
                />
            </div>

        </div>
    )
}

export default Hero
