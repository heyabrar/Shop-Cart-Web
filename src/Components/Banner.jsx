import { Box, Button, Image, Text } from "@chakra-ui/react";
import BannerImage from '../ShopCart Banner.png'
export default function Banner() {
    return (
        <>
            <Box mt='-80px'>
                <Image src={BannerImage} alt='Banner' width='100%' />
                <Box className="BannerContent" color='#003d29' width={{ base: '60%', md: '50%', lg: '40%' }} >
                    <Text fontSize={{ base: '18px', md: '35px', lg: '60px' }} fontWeight='700'>Shopping And Department Store.</Text>
                    <Text mt={{ base: '10px', lg: '30px' }} fontWeight='400' fontSize={{ base: '12px', md: '18px', lg: '22px' }}>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</Text>
                    <Button colorScheme='#003d29' bg='#003d29' borderRadius='20px' size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '25px', lg: '30px' }}>Learn More</Button>
                </Box>
            </Box>
        </>
    )
}