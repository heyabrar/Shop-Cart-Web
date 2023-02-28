import { Box, Flex, IconButton, Stack, Text, Image, Input, useDisclosure, Button, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuList, MenuItem, SimpleGrid } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import TopMiniNav from './TopMiniNav';
import { AiOutlineUser } from 'react-icons/ai'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const PopularCategories = [
        {
            id: 1,
            image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png',
            title: 'Furniture',
            stock: '240 Items Available'
        },
        {
            id: 2,
            image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png',
            title: 'Shoe',
            stock: '240 Items Available'
        },
        {
            id: 3,
            image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png',
            title: 'Laptop',
            stock: '240 Items Available'
        },
        {
            id: 4,
            image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png',
            title: 'Hand Bag',
            stock: '240 Items Available'
        },
        {
            id: 5,
            image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png',
            title: 'Headphone',
            stock: '240 Items Available'
        },
        {
            id: 6,
            image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png',
            title: 'Book',
            stock: '240 Items Available'
        }
    ]
    return (
        <>
            <TopMiniNav />
            <Box px={4} mb={20} className='ChackraNavBar' shadow='sm' padding='10px'>
                <Flex h={16} alignItems='center' width='85%' m='auto' gap='10px'>
                    <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' color='#6e6d7a' />} aria-label='Open Menu' display={{ lg: 'none' }} onClick={isOpen ? onClose : onOpen} />

                    <Box width={{ base: "20%", md: '13%', lg: '10%' }} justifyContent={'center'} m='auto'>
                        <Image src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg' width='160px' m='auto' />
                    </Box>

                    <Flex as={'nav'} display={{ base: 'none', md: 'none', lg: 'flex' }} spacing={4} gap='10px' w={{ base: '', md: '90%', lg: '95%' }} alignItems='center' justifyContent='space-between'>
                        <Flex justifyContent='space-around' width='40%' color='black' fontWeight='600'>
                            <Menu isLazy>
                                <MenuButton>
                                    <Flex justifyContent='center' aligitems='center' gap='2px' fontWeight='600'><Text>Categories</Text> <Text><MdOutlineKeyboardArrowDown /></Text></Flex>
                                </MenuButton>
                                <MenuList color='black' padding='10px'>
                                    <Text>Popular Categories</Text>
                                    <hr />
                                    <SimpleGrid columns={[2, 2, 2, 2]} gap='30px'>
                                        {PopularCategories.length > 0 && PopularCategories.map((elem) => {
                                            return <Flex bg='#f5f6f6' padding='5px' gap='15px' mt='10px'>
                                                <Image src={elem.image} />
                                                <Box cursor='pointer'>
                                                    <Text>{elem.title}</Text>
                                                    <Text fontSize='12px' fontWeight='400' color='gray'>{elem.stock}</Text>
                                                </Box>
                                            </Flex>
                                        })}
                                    </SimpleGrid>
                                </MenuList>
                            </Menu>
                            <Text cursor='pointer'>Deals</Text>
                            <Text cursor='pointer'>What's New</Text>
                            <Text cursor='pointer'>Delivery</Text>
                        </Flex>

                        <Box>
                            <InputGroup>
                                <InputRightElement
                                    pointerEvents='cursor'
                                    children={<SearchIcon color='black'  cursor='pointer'/>}
                                />
                                <Input type='text' placeholder='Search' borderRadius='15px' width='300px' border='1px solid gray' />
                            </InputGroup>
                        </Box>

                        <Flex gap='20px' color='black' fontWeight='600'>
                            <Flex justifyContent='center' alignItems='center' gap='10px'>
                                <Text><AiOutlineUser /></Text>
                                <Text>Account</Text>
                            </Flex>

                            <Flex justifyContent='center' alignItems='center' gap='10px'>
                                <Text><TbShoppingCartPlus /></Text>
                                <Text>Cart</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ lg: 'none' }} >
                        <Stack as={'nav'} spacing={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<SearchIcon color='gray.300' />}
                                />
                                <Input type='text' placeholder='Search' focusBorderColor='#ea4c89' />
                            </InputGroup>
                            <Text>Inspiration</Text>
                            <Text>Find Work</Text>
                            <Text>Learn Design</Text>
                            <Text>Go Pro</Text>
                            <Text>Hire Designers</Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}