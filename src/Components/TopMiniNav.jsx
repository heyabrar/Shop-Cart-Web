import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { BsTelephone } from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

export default function TopMiniNav() {
    return (
        <>
            <Box bg='#003d29' color='white' fontSize='12px' padding='10px' letterSpacing='1px' fontWeight='600' display={{ base: 'none', md: 'none', lg: 'block' }} >
                <Flex justifyContent='space-around'>
                    <Flex justifyContent='center' alignItems='center' gap='5px'>
                        <Text><BsTelephone /></Text>
                        <Text>  +001234567890</Text>
                    </Flex>
                    <Text>Get 50% Off on Selected Items    |      Shop Now</Text>
                    <Flex gap='10px'>
                        <Menu isLazy>
                            <MenuButton>
                                <Flex justifyContent='center' aligitems='center' gap='2px' fontWeight='600'><Text>Eng</Text> <Text><MdOutlineKeyboardArrowDown/></Text></Flex>
                                </MenuButton>
                            <MenuList color='black'>
                                <MenuItem>Bangla</MenuItem>
                                <MenuItem>Arabic</MenuItem>
                                <MenuItem>Urdu</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu isLazy>
                            <MenuButton>
                            <Flex justifyContent='center' aligitems='center' gap='2px' fontWeight='600'><Text>Location</Text> <Text><MdOutlineKeyboardArrowDown/></Text></Flex>
                            </MenuButton>
                            <MenuList color='black'>
                                <MenuItem>Dhaka</MenuItem>
                                <MenuItem>USA</MenuItem>
                                <MenuItem>India</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}