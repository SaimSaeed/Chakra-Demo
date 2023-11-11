import { Stack,Image, HStack, Avatar ,Text, VStack, Heading, Flex, Button} from '@chakra-ui/react'
import thumbnail from "../Assets/thumbnail.png"
import React from 'react'
import { Link } from 'react-router-dom'

function PostCard() {
  return (
    <Flex justify={"center"} align={"center"}>
        <Stack width={"320px"} boxShadow={"md"} borderRadius={"xl"}>
   <Image src={thumbnail} alt='thumbnail' borderRadius={"xl"} />
   <Stack p={"2"}>
   <HStack>
   <Avatar size={"sm"}/>
    <Text fontWeight={"600"}>
        Saim 
        Saeed
    </Text>
    <Text fontSize={"xs"}>
      1 Min Ago
    </Text>
   </HStack>
   <VStack align={"flex-start"}>
    <Heading fontSize={"lg"}>
        View My Gig on Fiverr
    </Heading>
    <Text fontSize={"sm"}>
    Finding your niche
The best Gig ideas are small, scalable tasks that only take a few minutes to complete.
As a seller, your first assignment should be to break down your skillset into a small offering that makes sense to start selling at $5.
 



 


    </Text>
    <Text fontSize={"sm"}>
    The best Gig ideas are small, scalable tasks that only take a few minutes to complete.
As a seller, your first assignment should be to break down your skillset into a small offering that makes sense to start selling at $5.
 

    </Text>
    <Button alignSelf={"flex-end"} size={"sm"} as={Link} to={"/post"}>View Post</Button>
   </VStack>
   </Stack>
   </Stack>
    </Flex>
  )
}

export default PostCard