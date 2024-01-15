import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import OurService from '@/components/OurService'
import WhySeedVault from '@/components/WhySeedVault'

export default function Home() {
  return (
    <main className=' bg'>
      <Navbar />
      <div>
        <img src={"./circle.svg"} alt="" className=' ' />
      </div>
        <Hero />
      
      <OurService />
      <WhySeedVault />
    </main>
  )
}
