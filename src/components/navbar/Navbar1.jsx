import { Box,Button,HStack,Image,Input } from "@chakra-ui/react"
import { Menu, Portal } from "@chakra-ui/react"
import { LuChevronRight } from "react-icons/lu"
import {Link} from 'react-router'


function Navbar1() {

    return (
        <>
         <Box width="100%" padding="4" >
          <HStack justifyContent="space-between">
         <Link to="/">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Dell_Technologies_logo.svg/2560px-Dell_Technologies_logo.svg.png" w='200px' ></Image>
         </Link> 
           <Input placeholder="Search Dell" w="40%" />
           <HStack justifyContent="space-between" gap={20}>

           <Link to="/login" >Sign In</Link>
          
           <Link to="/contact" ><Box bgColor="white" variant="surface">Contact Us</Box></Link>
           <Link to="/language" ><Box bgColor="white" variant="surface">IN/EN</Box></Link>
           

        <Menu.Root >
      <Menu.Trigger asChild>
      <Box marginRight={"10px"} bgColor="white" variant="surface">Cart  </Box>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem>
                Open Recent <LuChevronRight />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="panda">Panda</Menu.Item>
                    <Menu.Item value="ark">Ark UI</Menu.Item>
                    <Menu.Item value="chakra">Chakra v3</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>

           </HStack>
            </HStack>
         </Box>
        
        </>
    )
}

export default Navbar1