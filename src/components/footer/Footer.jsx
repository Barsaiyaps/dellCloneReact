import { Box, Flex, HStack ,Stack,Text} from "@chakra-ui/react"


function Footer() {
    return (
        <>
        <Box background="#eaeded" width="100%" padding="4" color="#808080">        
           <div style={{display:"flex",paddingLeft:"30px",gap:"50px",justifyContent:"space-evenly",margin:"25px"}}>
           <div style={{width:"100%"}}>
                <Text p="1">IN/EN</Text>
                <Text p={1}>Site Map</Text>
            </div>
            <div style={{width:"100%"}}>
                <Text p='1' fontWeight="bold">Account</Text>
                <Text p="1">My Account</Text>
                <Text p={1}>Order Status</Text>
                <Text p={1}>Profile Setting</Text>
                <Text p={1}>My Products</Text>
            </div>
            <div style={{width:"100%"}}>
                <Text p='1' fontWeight="bold">Support</Text>
                <Text p="1">Support Home</Text>
                <Text p={1}>Contact Technical Support</Text>
                <Text p={1}>Returns</Text>
            </div>
            <div style={{width:"100%"}}>
                <Text p='1' fontWeight="bold">Connect with Us</Text>
                <Text p="1">Community</Text>
                <Text p={1}>Contact Us</Text>   
            </div>
           </div>
        
        <div style={{display:"flex",paddingLeft:"30px",gap:"50px",margin:"10px"}}>
            <div style={{width:"100%"}}>
                <Text p='1' fontWeight="bold">Our offering</Text>
                <Text p={1}>Artificial Intelligence</Text>
                <Text p={1}>Products</Text>
                <Text p={1}>solutions</Text>
                <Text p={1}>Services</Text>
                <Text p={1}>Deals</Text>
            </div>
            <div style={{width:"100%"}}>
                <Text p={1} fontWeight={"bold"}>Our Company</Text>
                <Text p={1}>Who We Are</Text>
                <Text p={1}>Careers</Text>
                <Text p={1}>Dell Technologies Capital</Text>
                <Text p={1}>Investors</Text>
                <Text p={1}>Newsroom</Text>
                <Text p={1}>Recycling</Text>
                <Text p={1}>ESG & Impact</Text>
                <Text p={1}>Customer Stories</Text>
            </div>
            <div style={{width:"100%"}}>
                <Text p={1} fontWeight={"bold"}>Our Partners</Text>
                <Text p={1}>Find a Partner</Text>
                <Text p={1}>OEM</Text>
                <Text p={1}>Partner Program</Text>
            </div>
            <div style={{width:"100%"}}>
                <Text p={1} fontWeight={"bold"}>Resources</Text>
                <Text p={1}>Blog</Text>
                <Text p={1}>Dell rewards</Text>
                <Text p={1}>Events</Text>
                <Text p={1}>Email Sign Up</Text>
                <Text p={1}>Privacy Center </Text>
                <Text p={1}>Security and Trust Center</Text>
                <Text p={1}>Trail Software Downloads</Text>
            </div>
        </div>
        <div>
            <div style={{display:"flex",paddingLeft:"30px",gap:"50px",margin:"10px"}}>
                <Text p={1} fontWeight={"bold"}>Dell Technologies</Text>
                <Text p={1} fontWeight={"bold"}>Dell Premier</Text>
            </div>
        </div>
        <div style={{display:"flex",paddingLeft:"30px", gap:"50px",margin:"10px"}}>
            
                <Text p={1}>Copyright © 2025 Dell Inc.</Text>
                <Text p={1}>Terms of Sale</Text>
                <Text p={1}>Privacy Statement</Text>
                <Text p={1}>Cookies, Ads & Emails</Text>
                <Text p={1}>Legal & Regulatory</Text>
                <Text p={1}>Accessibility</Text>            
        </div>
        </Box>
        </>
    )
}

export default Footer