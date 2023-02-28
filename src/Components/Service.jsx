import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function ServicesToHelp() {
    const Service = [
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png',
            title: 'Frequently Asked Questions',
            desc: 'Updates on safe Shopping in our Stores'
        },
        {
            id: 2,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png',
            title: 'Online Payment Process',
            desc: 'Updates on safe Shopping in our Stores'
        },
        {
            id: 3,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png',
            title: 'Home Delivery Options',
            desc: 'Updates on safe Shopping in our Stores'
        },
    ]
    return (
        <>
            <Box width={{ base: '90%', md: '90%', lg: '85%' }} m='auto' mt={{ base: '60px', md: '50px', lg: '70px' }}>
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Services To Help You Shop</Text>
            </Box>

            <SimpleGrid width={{ base: '95%', md : '90%', lg: '85%'}} margin='auto' gap='40px' columns={[1,2,2,3]} mt='30px'>
                {Service.map((elem) => {
                    return <Box key={elem.id} borderRadius='10px'>
                        <Box  bg='#f5f6f6' padding={{base : '20px'}} paddingBottom='50px'>
                            <Text fontSize={{base : '24px'}} fontWeight={600} width={{base: '70%', lg: '90%'}}>{elem.title}</Text>
                            <Text mt='20px' width={{base: '70%'}} fontWeight={600} >{elem.desc}</Text>
                        </Box>
                        <Box className="ZoomImageBox">
                            <Image src={elem.img} alt={elem.title} w='100%' className="ZoomImage"/>
                        </Box>
                    </Box>
                })}
            </SimpleGrid>
        </>
    )
}