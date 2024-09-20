import Image from "next/image";
import Navbar from '@/components/navbar/Navbar'
import Sidebar from "@/components/Sidebar/Sidebar";
import Hero from "@/components/Hero/Hero";
import Timeline from "@/components/TimelineItem/TimelineItem";
export default function Home() {
  return (
    <main className="md:px-12 px-0 relative min-h-screen ">
      <div className="flex min-h-screen ">
        <div className="fixed min-h-screen flex items-center bg-white z-40">
          <div className="fixed-sidebar md:border-0 border-t bg-white">
            <Sidebar />
            {/* this is sidebar */}
            {/* this is sidebar */}
          </div>
        </div>
        <div className="w-full flex flex-col relative">
          <Navbar />
          <Hero />
          <Timeline />
        </div>
      </div>
    </main>
  );
}
