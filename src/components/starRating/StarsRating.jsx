   
import { HStack,Stack,Text,Image,Box } from "@chakra-ui/react"

function StarRating(){


    return (
        
        <Box background="rgb(0, 42 ,88)" color={"white"} width="100%" padding="12">
        <Stack >
          <Text margin={"auto"}>Based on my visit today, I would say Dell Technologies is...</Text>
          <HStack margin={"auto"}>
            <Text>Not at all innovative</Text>
            <HStack as="ul">
              {[...Array(7)].map((_, i) => (
                <li key={i+1} onClick={() => console.log(i+1)} style={{ cursor: "pointer" }}>
                  <Image boxSize="50px" src="https://static-00.iconduck.com/assets.00/star-rating-icon-2048x2048-2k1x57ky.png" />
                </li>
              ))}
            </HStack>
            <Text>Extremely innovative</Text>
          </HStack>
        </Stack>
        </Box>
      );
}

export default StarRating