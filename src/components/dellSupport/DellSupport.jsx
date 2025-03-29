import { Box, HStack,Text,Image, Button } from "@chakra-ui/react"
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router";




function DellSupport(){


    return(
        <>
        <Box  background="#293e52" width="100%" padding="10%" paddingTop={"5%"} color="white">
          <Box >
            <Text>Dell Support</Text>
            <Text textStyle="3xl">We're Here to Help</Text>
            <Text>From offering expert advice to solving complex problems, we've got you covered.</Text>
          </Box>
          <Box margin={"auto"} marginTop={"30px"} >
          <HStack gap={"20px"} justifyContent={"space-between"}>
            <Box  p="10" background="#536878">
              <AiOutlineHome size={50}  /> 
              <Text>Support Home</Text>
            </Box >
            <Box  p="10" background="#536878">
            <AiOutlineHome size={50}  /> 
              <Text>Drivers and Download</Text>
            </Box>
            <Box   p="10" background="#536878">
            <AiOutlineHome size={50}  /> 
              <Text>Orders Support</Text>
            </Box>

            <Box  p="10" background="#536878">
            <AiOutlineHome size={50}  /> 
              <Text>Warranty and Contacts</Text>
            </Box>
            <Box p="10" background="#536878">
            <AiOutlineHome size={50}  /> 
              <Text>Parts and Upgades</Text>
            </Box>
            
          </HStack>
          </Box>

          <Box color={"white"} marginTop={"50px"} >
            <HStack>
                <Box w={"700px"} h={"auto"} background={"#002D62"} p={"10"} m={"10"} position={"relative"} zIndex={10}>
                   <Text textStyle="3xl" m={"10px"} > My Account</Text>
                   <Text m={"10px"}> My account is an easy, more centralized way to manage your tech.</Text>
                   <HStack>
                   <Link  to="/login" ><Button w={"100%"} bg={"white"} color={"#002D62"}>Sign In </Button></Link>
                    <Link to="/login" w={"100%"}><Button w={"100%"} opacity={1} bg={"#002D62"} border={"1px solid white"} color={"white"}>Create Account </Button></Link>
                    </HStack> 
                    <HStack gap={"20px"} m={"25px"}>
                        <Box>Easy Ordering</Box>
                        <Box>Order Tracking</Box>
                        <Box>Profile Setting</Box>
                    </HStack>
                </Box>
                <Box><Image  h={"500px"} marginLeft={"-100px"}  position={"relative"}  src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-account-desktop-pan-dell-bulk-0455.jpg?wid=1200&hei=675"></Image></Box>
            </HStack>
          </Box>

          <Box color={"white"} marginTop={"20px"}  >
            <HStack>
                <Box><Image  h={"500px"} marginRight={"300px"}  position={"relative"}  src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-premier-1200x675.jpg?wid=1200&hei=675"></Image></Box>
                <Box w={"1000px"} h={"auto"} background={"#151E27"} p={"10"} m={"10"} marginLeft={"-100px"} position={"relative"} zIndex={10}>
                   <Text textStyle="3xl" m={"10px"} > Dell Primier</Text>
                   <Text m={"10px"}> Leverage hands-on IT purchasing for your business with personalised product selection and easy ordering via our customisable online platform.</Text>
                   <HStack>
                    <Button w={"40%"} bg={"#151E27"} color={"white"}>Sign In{"->"} </Button>
                    <Button w={"60%"} opacity={1} bg={"#151E27"} border={"1px solid white"} color={"white"}>Learn about Dell Premier </Button>
                    </HStack> 
                    <HStack justifyContent={"space-between"} gap={"20px"} m={"50px"}>
                        <Box>Easy Ordering</Box>
                        <Box>Order Tracking</Box>
                        <Box>Profile Setting</Box>
                    </HStack>
                </Box>
            </HStack>
          </Box>



        </Box>
        
        
        
        </>
    )
}


export default DellSupport