import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function SeventyPercentSection() {
    const Data = [
        {
            id: 1,
            save: 'Save',
            price: '$100',
            desc: 'Explore Our Furniture & Home Furnishing Range',
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png',
            bg: '#f2e4d9',
            color : '#cb9917'
        },
        {
            id: 2,
            save: 'Save',
            price: '$29',
            desc: 'Explore Our Furniture & Home Furnishing Range',
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png',
            bg : '#f9dcdc',
            color : '#961f1f'
        },
        {
            id: 3,
            save: 'Save',
            price: '$67',
            desc: 'Explore Our Furniture & Home Furnishing Range',
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png',
            bg: '#f2e4d9',
            color : '#94623c'
        },
        {
            id: 4,
            save: 'Save',
            price: '$59',
            desc: 'Explore Our Furniture & Home Furnishing Range',
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png',
            bg: '#d2f7ec',
            color :'#003d29'
        }
    ]
    return (
        <>
            <Box width={{ base: '90%', lg: '85%' }} m='auto' mt={{ base: '60px', md: '25px', lg: '70px' }}>
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Get Up To 70% Off</Text>
            </Box>

            <SimpleGrid columns={[1, 2, 2, 4]} width={{ base: '90%', lg: '85%'}} margin='auto' gap='20px' mt='30px'>
                {Data.map((item) => {
                    return <Box m='auto'>
                        <Box key={item.id} padding='15px' bg={item.bg} borderTopRadius='10px'>
                            <Text fontSize={{ base: '22px', md : '26px'}} fontWeight='650'>{item.save}</Text>
                            <Text fontSize={{ base: '28px', md : '45px'}} fontWeight='650' color={item.color}>{item.price}</Text>
                            <Text fontSize={{ base: '17px' }}>{item.desc}</Text>
                        </Box>
                        <Box className="ZoomImageBox">
                            <Image src={item.img} alt={item.desc} width='100%'  borderBottomRadius='10px' className="ZoomImage"/>
                        </Box>
                    </Box>
                })}
            </SimpleGrid>
        </>
    )
}