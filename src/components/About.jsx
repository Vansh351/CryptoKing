import {TfiGithub,TfiLinkedin} from "react-icons/tfi"
import {SiInstagram} from "react-icons/si"
import { Stack, VStack ,Avatar,Text, Box, HStack} from '@chakra-ui/react'
import React from 'react'
const avatarSrc = "https://github.com/Vansh351/To-Do-List/blob/main/IMG_20220510_204009_536.jpg?raw=true";



const About = () => {
  return (
    <Stack  justifyItems={'center'} >
     <VStack marginTop={'5'}>
      <Avatar filter={'grayscale(1)'} boxSize={"52"}  mt={["4", "0"]} src={avatarSrc} />
       <Box 
       alignItems={'center'}
       padding={['8','14']}
       w={['100%','60%']}
       
      >
       <Text 
      fontSize={'lg'}
      textAlign={'center'}
      letterSpacing={["unset","widest"]}
      >
      Hey! Myself Vansh Chauhan . I'm a 3rd Year Student Of National Institute 
      of Technology Kurukshetra, Haryana . I have made this project using ReactJs . Here are my other handles ... stay tuned 👍  
      </Text>

      <HStack marginTop={['9','14']} 
       justifyContent={'center'} 
       spacing={'9'}
       > 
       
       <a href="https://github.com/Vansh351">
        <TfiGithub  size={'30'} />
        </a>
        <a href="https://www.linkedin.com/in/vansh-chauhan-088139202"> 
        <TfiLinkedin size={'30'}/>
        </a>
        <a href="https://www.instagram.com/">
        <SiInstagram size={'30'} />
        </a>
      </HStack>
      </Box>
     </VStack>
    </Stack>
   
  )
}

export default About
