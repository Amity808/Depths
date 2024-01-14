import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className=' bg'>
      <Navbar />
      <div>
        <img src={"./circle.svg"} alt="" />
      </div>
      <section>
        <Hero />
      </section>
    </main>
  )
}
