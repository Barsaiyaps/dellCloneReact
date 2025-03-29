import Navbar1 from './components/navbar/Navbar1'
import Navbar2 from './components/navbar/Navbar2'
import Footer from './components/footer/Footer'
import Home from './pages/home'
import { Button } from '@chakra-ui/react'
import LoginPage from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import AllRoutes from './routes/AllRoutes'



function App() {
  

  return (
    <>
    
      <Button style={{position:"fixed",bottom:"25px",right:"50px", borderRadius:"0px",width:"150px",backgroundColor:"blue",color:"white",zIndex:"100"}}>Contact Us</Button>
      <Navbar1/>
      <Navbar2/>
      <AllRoutes/>  
      <Footer/>
    </>
  )
}

export default App
