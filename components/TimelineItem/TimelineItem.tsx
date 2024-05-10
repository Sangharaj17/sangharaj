import React from 'react';
import Image from 'next/image';

interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    link: string;
    imageSrc: string;
    altText: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, link, imageSrc, altText }) => {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5  bg-gray-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
            <div className="flex items-center mb-2 mt-2 w-full">
                <div className="mr-2 w-8 h-8 rounded-full bg-gray-200 border border-gray-200">
                    <Image src={imageSrc} alt={altText} width={500} height={500} className='rounded-full w-full h-full object-contain' />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 w-auto">{title}</h3>
            </div>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <a href={link} className="inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-100 text-blue-700 border-gray-200 rounded-lg hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 ">
                Learn more
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </li>
    );
}


const Timeline: React.FC = () => {
    return (
        <div className='p-2 md:p-10 w-full px-5 md:px-28 pb-10'>
            <div className='text-lg mb-8 md:mb-8 font-semibold'>
                My Work
            </div>
            <ol className="relative border-s border-gray-300 ">
                <TimelineItem
                    date="June 2022"
                    title="A Video Streaming Platform"
                    description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
                    link="#"
                    imageSrc="/vc.png"
                    altText="Your Image Alt Text"
                />
                <TimelineItem
                    date="Augest 2022"
                    title="Website for Ring Carnival"
                    description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
                    link="#"
                    imageSrc="/rc.png"
                    altText="Your Image Alt Text"
                />
                <TimelineItem
                    date="December 2022"
                    title="Entree Manager"
                    description="All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
                    link="#"
                    imageSrc="/E.png"
                    altText="Your Image Alt Text"
                />
                <TimelineItem
                    date="April 2023"
                    title="Sawal Jawab"
                    description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
                    link="#"
                    imageSrc="/sawaljawab-iocn.png"
                    altText="Your Image Alt Text"
                />
                <TimelineItem
                    date="June 2023"
                    title="Reos Separation System"
                    description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
                    link="#"
                    imageSrc="/reos-logo-img.png"
                    altText="Your Image Alt Text"
                />
                <TimelineItem
                    date="December 2023"
                    title="ScrollJourney.com"
                    description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
                    link="#"
                    imageSrc="/scroll_journey.png"
                    altText="Your Image Alt Text"
                />
                <TimelineItem
                    date="february 2024"
                    title="Website for Devignite Hackathon"
                    description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
                    link="#"
                    imageSrc="/dev_ig.png"
                    altText="Your Image Alt Text"
                />
                <TimelineItem
                    date="april 2024"
                    title="Shop25 an e-commerce platform"
                    description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
                    link="#"
                    imageSrc="/shop25-logo-png.png"
                    altText="Your Image Alt Text"
                />
            </ol>
        </div>

    );
}

export default Timeline;
