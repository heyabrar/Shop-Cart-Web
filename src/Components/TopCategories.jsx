import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function TopCategories() {
    const TopCategories = [
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png',
            title: 'Furniture'
        },
        {
            id: 2,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png',
            title: 'Hand Bag'
        },
        {
            id: 3,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png',
            title: 'Books'
        },
        {
            id: 4,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png',
            title: 'Tech'
        },
        {
            id: 5,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png',
            title: 'Sneakers'
        },
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png',
            title: 'Travel'
        },
    ]
    return (
        <>
            <Box width={{ base: '95%', lg: '85%' }} m='auto' mt={{ base: '-130px', md: '-210px', lg: '-250px' }}>
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Shop Our Top Categories</Text>
                <SimpleGrid columns={[2, 2, 3, 6]} columnGap='10px'>
                    {TopCategories.map((elem) => {
                        return <Box key={elem.id}>
                            <Text position='relative' top={{ base: '45px' }} left={{ base: '15px', md: '65px' }} fontSize={{ base: '18px', md: '22px' }} color='white' fontWeight='650'>{elem.title}</Text>
                            <Box className="ZoomImageBox">
                                <Image src={elem.img} borderRadius='10px' m='auto' className="ZoomImage" />
                            </Box>
                        </Box>
                    })}
                </SimpleGrid>
            </Box>
        </>
    )
}