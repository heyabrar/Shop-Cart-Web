import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Footer() {
    const payments = [
        {
            id: 1,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png'
        },
        {
            id: 2,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png'
        },
        {
            id: 3,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png'
        },
        {
            id: 4,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png'
        },
        {
            id: 5,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png'
        },
        {
            id: 6,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png'
        },
        {
            id: 7,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png'
        },
        {
            id: 8,
            img: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png'
        },
    ]
    return (
        <>
            <Flex width={{ base: '95%', lg: '90%' }} m='auto' mt='100px' direction={{ base: 'column', lg: 'row' }} rowGap='20px'>
                <Box width={{ base: '', md: '40%', lg: '35%' }}>
                    <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="logo" width={{ base: '100px', md: '150px', lg: '190px' }} />
                    <Text mt={{ base: '20px' }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
                    <Box display={{ base: 'none', md: 'block' }}>
                        <Text mt='20px' fontSize='17px' fontWeight='600'>Accepted Payments</Text>
                        <SimpleGrid columns={[4, 4, 4, 4]} gap='20px' width={{ base: '', lg: '70%' }}>
                            {payments.map((elem) => {
                                return <Flex key={elem.id} border='1px solid gray' justifyContent='center' alignItems='center' padding='8px' borderRadius='5px'>
                                    <Image src={elem.img} />
                                </Flex>
                            })}
                        </SimpleGrid>
                    </Box>
                </Box>

                <SimpleGrid columns={[2, 3, 3, 4]} width={{ base: '', lg: '80%' }} >
                    <Box lineHeight={{ base: '35px' }}>
                        <Text fontWeight='600' cursor='pointer'>Departments</Text>
                        <Text cursor='pointer'>Fashion</Text>
                        <Text cursor='pointer'>Education Product</Text>
                        <Text cursor='pointer'>Frozen Food</Text>
                        <Text cursor='pointer'>Beverages</Text>
                        <Text cursor='pointer'>Organic Grocery</Text>
                        <Text cursor='pointer'>Office Supplies</Text>
                        <Text cursor='pointer'>Beauty Products</Text>
                        <Text cursor='pointer'>Books</Text>
                        <Text cursor='pointer'>Electronics & Gadget</Text>
                        <Text cursor='pointer'>Travel Accessories</Text>
                        <Text cursor='pointer'>Fitness</Text>
                        <Text cursor='pointer'>Sneakers</Text>
                        <Text cursor='pointer'>Toys</Text>
                        <Text cursor='pointer'>Furniture</Text>
                    </Box>

                    <Box lineHeight={{ base: '35px' }}>
                        <Text fontWeight={600}>About Us</Text>
                        <Text cursor='pointer'>About Shopcart</Text>
                        <Text cursor='pointer'>Careers</Text>
                        <Text cursor='pointer'>News & Blog</Text>
                        <Text cursor='pointer'>Help</Text>
                        <Text cursor='pointer'>Press Center</Text>
                        <Text cursor='pointer'>Shop By Location</Text>
                        <Text cursor='pointer'>Shopcart Brands</Text>
                        <Text cursor='pointer'>Affiliate & Partners</Text>
                        <Text cursor='pointer'>Ideas & Guides</Text>
                    </Box>


                    <Box lineHeight={{ base: '35px' }}>
                        <Text fontWeight={600} cursor='pointer'>Services</Text>
                        <Text cursor='pointer'>Gift Card</Text>
                        <Text cursor='pointer'>Mobile App</Text>
                        <Text cursor='pointer'>Shipping & Delivery</Text>
                        <Text cursor='pointer'>Order Pickup</Text>
                        <Text cursor='pointer'>Account Signup</Text>
                    </Box>


                    <Box lineHeight={{ base: '35px' }}>
                        <Text fontWeight={600}>Help</Text>
                        <Text cursor='pointer'>Shopcart Help</Text>
                        <Text cursor='pointer'>Returns</Text>
                        <Text cursor='pointer'>Track Orders</Text>
                        <Text cursor='pointer'>Contact Us</Text>
                        <Text cursor='pointer'>Feedback</Text>
                        <Text cursor='pointer'>Security & Fraud</Text>
                    </Box>
                </SimpleGrid>
            </Flex>

            <Box display={{ base: 'block', md: 'none' }} width='90%' m='auto'>
                <Text mt='20px' fontSize='17px' fontWeight='600'>Accepted Payments</Text>
                <SimpleGrid columns={[4, 4, 4, 4]} gap='20px' width={{ base: '', lg: '70%' }}>
                    {payments.map((elem) => {
                        return <Flex key={elem.id} border='1px solid gray' justifyContent='center' alignItems='center' padding='8px' borderRadius='5px'>
                            <Image src={elem.img} />
                        </Flex>
                    })}
                </SimpleGrid>
            </Box>
        </>
    )
}