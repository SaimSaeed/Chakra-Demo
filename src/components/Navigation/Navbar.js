import { Avatar, 
    Flex,
     IconButton, 
    //  List,
    //   ListItem
     } from '@chakra-ui/react'
import React from 'react'
import { FaBars } from "react-icons/fa"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input, useDisclosure,
    // Popover,
    // PopoverTrigger,
    // PopoverContent,
    // PopoverHeader,
    // PopoverBody,
    // PopoverFooter,
    // PopoverArrow,
    // PopoverCloseButton,
    // PopoverAnchor,
    Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from '@chakra-ui/react'
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <div>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <Flex h={"75px"} bg={"brand.700"} justify={"space-between"} align={"center"} px={2}>
                <IconButton variant={"ghost"} fontSize={"3xl"} _hover={{ bg: "main.400" }} color={"white"} ref={btnRef} onClick={onOpen}>
                    <FaBars />
                </IconButton>
                {/* <Popover>
                    <PopoverTrigger>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Hello! User</PopoverHeader>
                        <PopoverBody>
                            <List>
                                <ListItem>
                                    Profile
                                </ListItem>
                                <ListItem>
                                    Settings
                                </ListItem>
                            </List>
                        </PopoverBody>
                    </PopoverContent>
                </Popover> */}
                    
                        <Menu>
  <MenuButton >
  <Avatar />
  </MenuButton>
  <MenuList>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Settings</MenuItem>
  
  </MenuList>
</Menu>

            </Flex>

        </div>
    )
}

export default Navbar