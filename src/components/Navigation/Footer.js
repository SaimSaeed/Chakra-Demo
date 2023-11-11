import { Flex ,Text} from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Flex bgColor={"brand.700"} p={4} align={"center"} justify={"center"}>
<Text fontWeight={600} color={"white"}>
    All Rights Reserved &reg; 2023
</Text>
    </Flex>
  )
}

export default Footer