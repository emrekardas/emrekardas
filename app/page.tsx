import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import TabletFrame from './components/layout/TabletFrame'
import Hero from './components/sections/Hero'
import Works from './components/sections/Works'
import BlogPreview from './components/sections/BlogPreview'
import About from './components/sections/About'

export default function Home() {
  return (
    <>
      <Navbar />
      <TabletFrame>
        <Hero />
        <Works />
        <BlogPreview />
        <About />
      </TabletFrame>
      <Footer />
    </>
  )
}
