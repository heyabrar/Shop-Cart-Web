import { Box, Text } from "@chakra-ui/react";
import CarouselComponent from "../CustomComponent/Carousel";

export default function MostSelling() {
    const BestDeals = [
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6eaf85336ce58cf03_instax%20mini%2011-min.png',
            title: 'Instax Mini 11',
            price: '$89.00',
            desc: 'Table with air purifier, stained veneer/black'
        },
        {
            id: 2,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74b76916e072f2466_watch-min.png',
            title: 'Hand Watch',
            price: '$59.00',
            desc: 'Selfie mode and selfie mirror, Marco mode'
        },
        {
            id: 3,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4037f3ba53bcf2021_adidas%20sneakers-min.png',
            title: 'adidas Sneakers',
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
            <Box width={{ base: '90%', lg: '85%' }} m='auto' mt={{ base: '60px', md: '25px', lg: '70px' }}>
                <Text fontSize={{ base: '22px', md: '28px' }} fontWeight='700'>Most Selling Products</Text>
                <Box mt='30px'>
                    <CarouselComponent data={BestDeals} itemsBase={2} itemsMd={3} itemsLg={3} />
                </Box>  
            </Box>
        </>
    )
}