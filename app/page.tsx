import Image from "next/image";
import Navbar from '@/components/navbar/Navbar'
import Sidebar from "@/components/Sidebar/Sidebar";
import Hero from "@/components/Hero/Hero";
export default function Home() {
  return (
    <main className="md:px-12 px-0 relative min-h-screen ">
      <div className="flex min-h-screen ">
        <div className="fixed min-h-screen flex items-center">
          <div className="fixed-sidebar md:border-0 border-t">
            <Sidebar />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </div>
    </main>
  );
}
