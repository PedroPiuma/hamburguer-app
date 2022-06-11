import { Stack, Icon, Text, Flex } from '@chakra-ui/react'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineTwitter, AiOutlineWhatsApp, AiTwotoneMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { GiHamburger } from 'react-icons/gi'

const Footer = () => {
    return (
        <Stack px={'20px'} py={'50px'} spacing={['25px', '50px']} bgColor={'gray.700'} direction={['column', 'row']} justify={['', 'space-around']}>
            <Flex align={'center'} gap={'5px'}><Text fontFamily={'Oleo Script'} fontSize={'25px'}>The Burger Cafe</Text><Icon as={GiHamburger} w={'25px'} h={'25px'} /></Flex>
            <Stack spacing={'15px'}>
                <Text fontFamily={'sans-serif'} fontWeight={700}>CONTATOS:</Text>
                <Flex align={'center'} gap={'5px'}><Icon as={AiOutlineWhatsApp} w={'25px'} h={'25px'} /><Text>555-555-5555</Text></Flex>
                <Flex align={'center'} gap={'5px'}><Icon as={AiTwotoneMail} w={'25px'} h={'25px'} /><Text>example@myemail.com</Text></Flex>
            </Stack>
            <Stack spacing={'15px'}>
                <Text fontFamily={'sans-serif'} fontWeight={700}>SIGA-NOS:</Text>
                <Flex gap={'15px'}>
                    <Icon as={ImFacebook} w={'25px'} h={'25px'} />
                    <Icon as={AiOutlineTwitter} w={'25px'} h={'25px'} />
                    <Icon as={BsInstagram} w={'25px'} h={'25px'} />
                </Flex>
            </Stack>
        </Stack>
    )
}

export default Footer
