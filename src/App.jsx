
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
    <div className='text-white' style={{ background: 'linear-gradient(90deg, #bdc3c7, #2c3e50)' }}>
      <Header></Header>
      <NavBar></NavBar>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>


    </div>
  )
}

export default App
