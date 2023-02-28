import { Box, Text } from "@chakra-ui/react";
import CarouselComponent from "../CustomComponent/Carousel";

export default function TodaysBestDeal() {
    const BestDeals = [
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png',
            title: 'HomePod mini',
            price: '$239.00',
            desc: 'Table with air purifier, stained veneer/black'
        },
        {
            id: 2,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png',
            title: 'Instix mini 9',
            price: '$99.00',
            desc: 'Selfie mode and selfie mirror, Marco mode'
        },
        {
            id: 3,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png',
            title: 'Base Camp Duffel M',
            price: '$159.00',
            desc: 'Table with air purifier, stained veneer/black'
        },
        {
            id: 4,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png',
            title: 'Tot e Medium',
            price: '$239.00',
            desc: 'Canvas, full grain leather'
        },
        {
            id: 5,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png',
            title: 'HomePod mini',
            price: '$239.00',
            desc: 'Table with air purifier, stained veneer/black'
        },
        {
            id: 6,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74b769109fd2f245a_tomford%20watch-min.png',
            title: 'HomePod mini',
            price: '$239.00',
            desc: 'Table with air purifier, stained veneer/black'
        }
    ]
    return (
        <>
            <Box width={{ base: '95%', md: '92%', lg: '85%' }} m='auto' mt={{ base: '20px', md: '45px', lg: '80px' }}>
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Todays Best Deals For You!</Text>
                <Box mt='30px'>
                    <CarouselComponent data={BestDeals} itemsBase={2} itemsMd={3} itemsLg={3} />
                </Box>
            </Box>
        </>
    )
}