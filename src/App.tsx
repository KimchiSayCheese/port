import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from 'components/Projects'
import Contact from 'components/Contact'
import Card from 'components/Card'

function App() {
  return (
    <div className="bg-[url('./img/slice1.svg')] bg-no-repeat sm:bg-[length:80%] md:bg-[length:60%] bg-right-top">
      <Navbar />
      <Header />
      <About>
        <div>
          <p className=" leading-loose md:text-base md:font-normal lg:font-medium lg:text-lg">
            I attended CUNY Queens College for computer science which is where I
            learned most of my programming fundamentals. Learning front-end and
            back-end development through college and personal projects made me
            realize web development was my career path. I have built some
            experience working with small team which helped me develop a working
            environment that exemplifies flexibilty, collaboration, and
            structure.
            <br />I am currently searching for a role as a web developer!
          </p>
        </div>
      </About>
      <Projects />
      <Contact />
    </div>
  )
}

export default App
