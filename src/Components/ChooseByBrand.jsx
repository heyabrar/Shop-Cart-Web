import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function ChooseByBrand() {
    const Brands = [
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png',
            title: 'Staples',
            desc: 'Delivery with in 24 hours'
        },
        {
            id: 2,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png',
            title: 'Sprouts',
            desc: 'Delivery with in 24 hours'
        },
        {
            id: 3,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png',
            title: 'Grocery outlet',
            desc: 'Delivery with in 24 hours'
        },
        {
            id: 4,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png',
            title: 'Mollie stones',
            desc: 'Delivery with in 24 hours'
        },
        {
            id: 5,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png',
            title: 'Sports Basement',
            desc: 'Delivery with in 24 hours'
        },
        {
            id: 6,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png',
            title: 'Container Store',
            desc: 'Delivery with in 24 hours'
        },
        {
            id: 7,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png',
            title: 'Target',
            desc: 'Delivery with in 24 hours'
        },
        {
            id: 8,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png',
            title: 'Bevmo!',
            desc: 'Delivery with in 24 hours'
        }
    ]
    return (
        <>
            <Box width={{ base: '95%',md: '92%', lg: '85%' }} m='auto' mt={{ base: '60px', md: '25px', lg: '80px' }} >
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Choose By Brand</Text>
            </Box>
                <SimpleGrid columns={[1, 2, 2, 4]} rowGap='15px'  width={{base :'95%', lg: '85%'}}  m='auto' mt='20px' >
                    {Brands.map((elem) => {
                        return <Flex key={elem.id} width={{ base: '90%' }} m='auto' justifyContent='space-evenly' alignItems='center'  bg='#f5f6f6' borderRadius='10px' _hover={{border : '1px solid black'}}>
                            <Box className="ZoomImageBox" width={{base: '30%'}} >
                                <Image src={elem.img} alt={elem.title} className='ZoomImage' m='auto'/>
                            </Box>

                            <Box>
                                <Text fontWeight='600' fontSize={{ base: '17px' }}>{elem.title}</Text>
                                <Text fontSize={{ base: '14px' }}>{elem.desc}</Text>
                            </Box>
                        </Flex>
                    })}
                </SimpleGrid>
        </>
    )
}