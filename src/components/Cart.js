import React from 'react'
import {  Heading, VStack,Text, Button, HStack, AspectRatio,Image, Stack, Divider, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Skate from "../Assets/skate.jpg"
function Cart() {

    const {toggleColorMode} = useColorMode()
    const bgcolor = useColorModeValue("black.50","whiteAlpha.50")
    const textcolor = useColorModeValue("gray.600","whiteAlpha.600")

  return (
    <VStack h={"full"} w={"full"} p={"10"} spacing={"10"} align={"flex-start"} bg={bgcolor}>

    <VStack spacing={"2"} align={"flex-start"} > 
    <Heading size={"2xl"}>Your Cart</Heading>
<Text>If the price is too hard on your eyes,{" "}</Text>
<Button onClick={toggleColorMode} variant={"outline"} colorScheme={"black"}>
  Try Changing The Theme
</Button>
</VStack>
<HStack spacing={"6"} align={"center"} w={"full"}>
  <AspectRatio ratio={1} w={24}>
    <Image src={Skate}/>
  </AspectRatio>
  <Stack spacing={0} w={"full"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
  <VStack spacing={"2"} align={"flex-start"} > 
    <Heading size={"md"}>Penny Board</Heading>
<Text color={textcolor}>PNYCOMP27541</Text>
</VStack>
<Heading size={"sm"} textAlign={"end"}>$119.00</Heading>
  </Stack>
</HStack>
<VStack spacing={4} alignItems={"stretch"} w={"full"}>
<HStack justifyContent={"space-between"}>
<Text color={textcolor}>SubTotal</Text>
<Heading size={"sm"}>$119.00</Heading>
</HStack>
<HStack justifyContent={"space-between"}>
<Text color={textcolor}>Shipping</Text>
<Heading size={"sm"}>$19.99</Heading>
</HStack>
<HStack justifyContent={"space-between"}>
<Text color={textcolor}>Taxes(Estimated)</Text>
<Heading size={"sm"}>$23.80</Heading>
</HStack>
<Divider/>
<HStack justifyContent={"space-between"}>
<Text color={textcolor}>Total</Text>
<Heading size={"lg"}>$162.79</Heading>
</HStack>
</VStack>
   
</VStack>




  )
}

export default Cart