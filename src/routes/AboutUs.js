import { Flex, Text, Button, Stack, Icon, Image, Box } from '@chakra-ui/react'
import { Fragment } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiFoodMenu } from 'react-icons/bi'
import hamburguerHomeImage from '../img/hamburguerHomeImage.png'
import Footer from '../components/Footer/Footer'

const AboutUs = () => {
    return (
        <Fragment>
            <Flex direction={'column'} align={'center'} justify='end' bgColor='red' h={'300px'} gap={'15px'}>
                <Text fontSize={'50px'} pt={'30px'} fontWeight={700} lineHeight={'50px'}>SOBRE NÓS</Text>
                <Text fontFamily={'Oleo Script'} fontSize={'25px'} mb={'50px'}>Nossa história</Text>
            </Flex>

            <Flex direction={['column', 'row']} pb={['', '25px']} justify={['', 'space-around']}>
                <Box>
                    <Flex direction={'column'} px={'20px'} py={'50px'} gap={'15px'} align='center'>
                        <Text fontSize={'40px'} align={'center'} fontWeight={700} fontFamily={'sans-serif'}>THE BURGER CAFE</Text>
                        <Text fontFamily={'sans-serif'} lineHeight={'30px'} maxW={'650px'}>Maecenas pretium, orci sit amet dignissim mattis, nunc metus malesuada nunc,
                            non pellentesque leo dolor ut urna. Etiam laoreet quam a bibendum mollis.
                            Class aptent taciti sociosqu a litora torquent per conubia nostra, per inceptos
                            himenaeos. Cras vitae augue in lorem malesuada sed hendrerit. </Text>
                    </Flex >
                    <Stack align={'center'} justify={'center'} spacing={'20px'} direction={['column', 'row']}>
                        <Button w={'fit-content'} bgColor={'red'}><Icon as={BiFoodMenu} w={'25px'} h={'25px'} />NOSSO MENU</Button>
                        <Button w={'fit-content'} colorScheme={'red'} variant={'outline'}><Icon as={HiOutlineLocationMarker} w={'25px'} h={'25px'} />LOCALIZAÇÃO</Button>
                    </Stack>
                </Box>
                <Flex py={'80px'} justify='center' gap={'10px'}>
                    <Image src={hamburguerHomeImage} w={['180px', '250px']} bgColor='white' />
                    <Image src={hamburguerHomeImage} w={['180px', '250px']} bgColor='white' />
                </Flex>
            </Flex>
            <Footer />
        </Fragment>
    )
}

export default AboutUs
