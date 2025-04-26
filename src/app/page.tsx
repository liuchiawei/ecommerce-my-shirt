import Footer from '@/components/ui/footer'
import Nav from '@/components/ui/nav'
import Hero from '@/components/page/hero'
import About from '@/components/page/about'
import Featured from '@/components/page/featured'
import NewArrivals from '@/components/page/newArrivals'
import News from '@/components/page/news'
import Stores from '@/components/page/stores'
import CatchCopy from '@/components/page/catchCopy'

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="w-full flex flex-col gap-20 relative z-10 overflow-hidden">
        <Hero />
        <CatchCopy />
        <NewArrivals />
        <News />
        <Featured />
        <Stores />
        <About />
      </main>
      <Footer />
    </div>
  );
}
