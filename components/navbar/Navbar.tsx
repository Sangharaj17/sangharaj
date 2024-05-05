import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='w-full flex justify-between items-center md:pt-10 py-4 md:py-0 md:px-0 px-4 border-b md:border-none'>
            <div className='text-lg font-semibold'>
                ZenCoder
            </div>
            <div className='hidden md:flex items-center justify-center gap-8'>
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
            <div className='hidden md:block'>
                <Link href='' className='p-4 border rounded-lg '>
                    Let's Chat
                </Link>
            </div>
            <div className='md:hidden block'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-right"><line x1="21" x2="3" y1="6" y2="6" /><line x1="21" x2="9" y1="12" y2="12" /><line x1="21" x2="7" y1="18" y2="18" /></svg>
            </div>
        </div>
    )
}

export default Navbar
