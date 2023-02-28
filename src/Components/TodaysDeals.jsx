import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function TodaysDeals() {
    const Deals = [
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png',
            title: 'Laptop sleeve MacBook',
            price: '$59.00',
            desc: 'Organic Cotton, fairtrade certified'
        },
        {
            id: 2,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',
            title: 'AirPods Max',
            price: '$559.00',
            desc: 'A perfect balance of high-fidelity audio'
        },
        {
            id: 3,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png',
            title: 'Flower Laptop Sleeve',
            price: '$39.00',
            desc: '15 in. x 10 in. -Flap top closure'
        },
        {
            id: 4,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png',
            title: 'Supreme Water Bottle',
            price: '$19.00',
            desc: 'Table with air purifier, stained veneer/black'
        },
        {
            id: 5,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5560c31bbfce_leptop%20sleeve%20macbook-min.png',
            title: 'Laptop sleeve MacBook',
            price: '$59.00',
            desc: 'Organic Cotton, fairtrade certified'
        },
        {
            id: 6,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png',
            title: 'Macbook pro 13"',
            price: '$1099.00',
            desc: '256, 8 core GPU, 8 GB'
        },
        {
            id: 7,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png',
            title: 'HomePod mini',
            price: '$59.00',
            desc: '5 Colors Available'
        },
        {
            id: 8,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png',
            title: 'Ipad Mini',
            price: '$539.00',
            desc: 'Table with air purifier, stained veneer/black'
        },
    ]
    return (
        <>
            <Box width={{ base: '90%', lg: '85%' }} m='auto' mt={{ base: '60px', md: '25px', lg: '70px' }}>
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Todays Best Deals For You!</Text>
                <SimpleGrid columns={[2,2,2,4]} gap='20px'>
                    {Deals.length > 0 && Deals.map((elem) => {
                        return <Box key={elem.id} m='auto' width={{ base: '90%', lg: '85%' }}>
                            <Box className="ZoomImageBox" bg='#f5f6f6'>
                                <Image src={elem.img} m='auto' draggable="false" className="ZoomImage" />
                            </Box>
                            <Flex justifyContent='space-between' fontSize={{ base: '15px', md: '18px' }} fontWeight='620' mt='10px'>
                                <Text>{elem.title}</Text>
                                <Text>{elem.price}</Text>
                            </Flex>
                            <Text fontSize={{ base: '12px', md: '15px' }} color='gray'>{elem.desc}</Text>
                            <Button border='1px solid black' bg='white' _hover={{ bg: '#003d29', color: 'white' }} borderRadius='15px' color='black' size={{ base: 'sm', md: 'md' }} mt={{ base: '10px', md: '15px' }}>Add To Cart</Button>
                        </Box>
                    })}
                </SimpleGrid>
            </Box>
        </>
    )
}