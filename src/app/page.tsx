import Footer from '@/components/ui/footer'
import Nav from '@/components/ui/nav'
import Hero from '@/components/page/hero'
import About from '@/components/page/about'
import Featured from '@/components/page/featured'
import NewArrivals from '@/components/page/newArrivals'
import Journal from '@/components/page/journal'
import News from '@/components/page/news'
import Stores from '@/components/page/stores'
export default function Home() {
  return (
    <div>
      <Nav />
      <main className="w-full h-full min-h-screen">
        <Hero />
        <NewArrivals />
        <Featured />
        <News />
        <Journal />
        <Stores />
        <About />
      </main>
      <Footer />
    </div>
  );
}
