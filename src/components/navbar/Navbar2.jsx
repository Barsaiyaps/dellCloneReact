import { Box,HStack,Image,Input,Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function Navbar2() {
    return (
        <>
         <Box width="100%" padding="4" >
            <HStack gap="10" justifyContent="left">
               <Link to="/ai"><Box variant="surface">Artificial Intelligence</Box></Link>
               <Box variant="surface">IT Infrastructure</Box>
               <Link to="/product"><Box variant="surface">Computer and Accesories</Box></Link>
               <Box variant="surface">Services</Box>
               <Box variant="surface">Support</Box>
               <Box variant="surface">Deals</Box>
               <Box variant="surface">Find a store</Box>
            </HStack>
         </Box>
        
        
        </>
    )
}

export default Navbar2