import React from 'react'
import { VStack,Heading,Select,Text,FormLabel,FormControl,GridItem,SimpleGrid,Input,Textarea,Checkbox,Button } from '@chakra-ui/react'

function YourDetails() {
  return (
    <VStack h={"full"} w={"full"} p={"10"} spacing={"10"} align={"flex-start"}>
    <VStack spacing={"2"} align={"flex-start"}> 
    <Heading>Your Details</Heading>
<Text>Click Here If You Already Logged In.</Text>
    </VStack>
<SimpleGrid columns={"2"} columnGap={"3"} rowGap={"4"} >
<GridItem colSpan={"1"}>
<FormControl>
<FormLabel>
First Name
</FormLabel>
<Input placeholder='Enter First Name'/>

</FormControl>


</GridItem>
<GridItem colSpan={"1"}>
<FormControl>
<FormLabel>
Last Name
</FormLabel>
<Input placeholder='Enter Last Name'/>

</FormControl>


</GridItem>
<GridItem colSpan={"2"}>
<FormControl>
<FormLabel>
Address
</FormLabel>
<Textarea placeholder='Enter Address'/>

</FormControl>


</GridItem>
<GridItem colSpan={"1"}>
<FormControl>
<FormLabel>
City
</FormLabel>
<Input placeholder='Enter City'/>

</FormControl>


</GridItem>
<GridItem colSpan={"1"}>
<FormControl>
<FormLabel>
Country
</FormLabel>
<Select placeholder='Select Country'>
  <option>Pakistani</option>
  <option>Canadian</option>
  <option>American</option>

</Select>

</FormControl>


</GridItem>
<GridItem colSpan={"2"}>
<FormControl>
<Checkbox>
  Ship to the billing address
</Checkbox>
</FormControl>
</GridItem>
<GridItem colSpan={"2"}>

<Button w={"full"} size={"lg"}>Place Items</Button>

</GridItem>
</SimpleGrid>
  </VStack>




  )
}

export default YourDetails