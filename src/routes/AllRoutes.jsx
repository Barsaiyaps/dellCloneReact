import {Routes,Route} from "react-router"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Contact from "../pages/Contact"
import Language from "../pages/Language"
import Product from "../pages/Product"
import AIPage from "../pages/ArtificialInteligence"
import ProductForm from "../pages/ProductForm"

function AllRoutes(){
 
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/language" element={<Language/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/ai" element={<AIPage/>} />
        <Route path="/add-product" element={<ProductForm/>} />

    </Routes>
 )
}

export default AllRoutes