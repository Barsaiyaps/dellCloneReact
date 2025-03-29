import {WindowBox8} from '../components/windows/WindowBox8'
import WindowBox4 from "../components/windows/WindowBox4"
import StarRating from '../components/starRating/StarsRating'
import Slider1 from '../components/sliders/Slider1'
import FooterBox from '../components/boxComponent/FooterBox'
import DellSupport from '../components/dellSupport/DellSupport'


function Home(){

    return(<>
      <Slider1/>
      <WindowBox8/>
      <h1>DELL PROJECT</h1>
      <DellSupport/>
      <WindowBox4/>
      <FooterBox/>
      <StarRating />
    </>
    )
}

export default Home