import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function TrendingProducts() {
    return (
        <>
            <Box width={{ base: '90%', lg: '85%' }} m='auto' mt={{ base: '60px', md: '50px', lg: '70px' }}>
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Trending Products For You!</Text>
                <Flex gap='20px' direction={{ base: 'column', md: 'row' }} mt='30px'>
                    <Box>
                        <Box className="ZoomImageBox">
                            <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png" borderTopRadius='10px' className="ZoomImage"/>
                        </Box>

                        <Box padding={{ base: '10px', lg: '25px '}} lineHeight={{ base: '40px', md: '50px' }} bg='#f5f6f6' borderBottomRadius='10px'>
                            <Text fontSize={{ base: '24px' }} fontWeight='600'>Furniture Village</Text>
                            <Text fontWeight='600'>Delivery with in 24 hours</Text>
                            <Button bg='black' colorScheme='black' color='white' borderRadius='20px'>Shop Now</Button>
                        </Box>
                    </Box>

                    <Box>
                        <Box className="ZoomImageBox">
                            <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png" borderTopRadius='10px' className="ZoomImage"/>
                        </Box>
                        <Box padding={{ base: '10px', lg :'25px'}} lineHeight={{ base: '40px', md: '50px' }} bg='#f5f6f6' borderBottomRadius='10px'>
                            <Text fontSize={{ base: '24px' }} fontWeight='600'>Fashion World</Text>
                            <Text fontWeight='600'>Delivery with in 24 hours</Text>
                            <Button bg='black' colorScheme='black' color='white' borderRadius='20px'>Shop Now</Button>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}