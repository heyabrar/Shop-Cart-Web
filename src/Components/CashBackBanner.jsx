import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function CashBackBanner() {
    return (
        <>
            <Box bg='#ffe6cc' mt={{ base: '50px', lg: '80px' }}>
                <Flex width={{ base: '100%', lg: '70%' }} m='auto'>
                    <Box w={{ base: '80%', md: '70%' }} padding={{ base: '30px', md: '50px' }} lineHeight={{ base: '45px', md: '50px' }} color='#003d29'>
                        <Text fontSize={{ base: '28px', md: '40px', lg: '55px' }} fontWeight='650'>Get 5% Cash Back</Text>
                        <Text fontSize='19px' fontWeight='600'>on Shopcart.com</Text>
                        <Button colorScheme='#003d29' bg='#003d29' borderRadius='20px' size={{ base: 'md', md: 'lg', lg: 'lg' }} mt={{ base: '10px', md: '25px', lg: '30px' }}>Learn More</Button>
                    </Box>

                    <Box display={{ base: 'none', md: 'block' }} padding={{ base: '0', md: '40px' }} margin='auto'>
                        <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png" alt="CashBack Banner" />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}