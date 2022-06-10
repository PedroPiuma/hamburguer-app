import { Text, Flex, Image } from '@chakra-ui/react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import HamburgerBox from '../components/HamburguerBox/HamburgerBox'
import hamburguerHomeImage from '../img/hamburguerHomeImage.png'
const Home = () => {
    return (
        <Fragment>
            <Flex pt={'100px'} minH={'100vh'} direction={'column'} bgColor='red' gap={'20px'}>
                <Text fontSize={'60px'} pt={'30px'} maxW={'220px'} align='center' fontWeight={700} mx={'auto'} lineHeight={'50px'}>Craft Burgers</Text>
                <Text fontSize={'30px'} mx={'auto'} fontWeight={700}>PELOTAS, RS</Text>
                <Image mt={'50px'} src={hamburguerHomeImage} />
            </Flex>
            <Flex align={'center'} direction={'column'} minH={'650px'} pt={'100px'} px={'20px'} gap={'20px'} border={'1px solid white'}>
                <Text color={'red'} fontFamily={'Oleo Script'} fontSize={'25px'}>Bem-vindo ao</Text>
                <Text fontSize={'40px'} w={'280px'} align={'center'} fontWeight={700} fontFamily={'sans-serif'}>THE BURGER CAFE</Text>
                <Text fontFamily={'sans-serif'} align={'center'} fontWeight={700} w={'250px'}>HAMBUGUERIA CASEIRA BURGERS DESDE 2010</Text>
                <Text fontFamily={'sans-serif'} align={'center'} lineHeight={'30px'}>Maecenas pretium, orci sit amet dignissim mattis, nunc metus malesuada nunc,
                    non pellentesque leo dolor ut urna. Etiam laoreet quam a bibendum mollis.
                    Class aptent taciti sociosqu a litora torquent per conubia nostra, per inceptos
                    himenaeos. Cras vitae augue in lorem malesuada sed hendrerit. </Text>
            </Flex>
            <HamburgerBox />
            <Footer />
        </Fragment>
    )
}

export default Home
