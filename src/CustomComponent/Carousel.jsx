import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function CarouselComponent({ data, itemsBase, itemsMd, itemsLg}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsLg, // should be number
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemsMd,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: itemsBase,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
      <Box>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .8"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "laptop"]}
          // deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.length > 0 && data.map((elem) => {
            return <Box key={elem.id} m='auto' width={{ base: '90%', lg: '85%' }}>
              <Box className="ZoomImageBox" bg='#f5f6f6'>
                <Image src={elem.img} m='auto' draggable="false" className="ZoomImage" />
              </Box>
              <Flex justifyContent='space-between' fontSize={{ base: '15px', md: '18px' }} fontWeight='620'>
                <Text>{elem.title}</Text>
                <Text>{elem.price}</Text>
              </Flex>
              <Text fontSize={{ base: '12px', md: '15px' }} color='gray'>{elem.desc}</Text>
              <Button border='1px solid black' bg='white' _hover={{bg:'#003d29',color: 'white'}} borderRadius='15px' color='black' size={{ base: 'sm', md: 'md' }} mt={{ base: '10px', md: '15px' }}>Add To Cart</Button>
            </Box>
          })}
        </Carousel>
      </Box>
    </>
  )
}

