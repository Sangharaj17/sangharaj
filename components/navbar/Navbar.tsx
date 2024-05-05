import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='w-full flex justify-between items-center pt-10'>
            <div className='text-lg font-semibold'>
                ZenCoder
            </div>
            <div className='flex items-center justify-center gap-8'>
                <Link href=''>
                    Home
                </Link>
                <Link href=''>
                    Work
                </Link>
                <Link href=''>
                    About me
                </Link>
                <Link href=''>
                    Projects
                </Link>
            </div>
            <div className=''>
                <Link href='' className='p-4 border rounded-lg '>
                    Let's Chat
                </Link>
            </div>
        </div>
    )
}

export default Navbar
