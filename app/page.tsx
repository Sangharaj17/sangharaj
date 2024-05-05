import Image from "next/image";
import Navbar from '@/components/navbar/Navbar'
import Sidebar from "@/components/Sidebar/Sidebar";
import Hero from "@/components/Hero/Hero";
export default function Home() {
  return (
    <main className="px-12 relative min-h-screen ">
      <div className="flex min-h-screen ">
        <div className="fixed min-h-screen flex items-center">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </div>
    </main>
  );
}
