import {
    Flex, Text, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure
} from "@chakra-ui/react"
import { Fragment, useRef } from "react"
import { Outlet, Link } from 'react-router-dom'
import { GiHamburgerMenu, GiHamburger } from 'react-icons/gi'
import { BiFoodMenu } from 'react-icons/bi'
import { HiUserGroup, HiOutlineLocationMarker } from 'react-icons/hi'

const Layout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <Fragment>
            <Flex position='fixed' top={0} w={['100%']} align='center' justify={'space-between'} px={'15px'} py={'20px'} bgColor='#000000'>
                <Flex align={'center'} gap={'15px'}><Icon as={GiHamburger} w={'35px'} h={'35px'} /><Text>The Burger </Text></Flex>
                <Icon as={GiHamburgerMenu} w={'35px'} h={'35px'} onClick={onOpen} cursor={'pointer'} />
                <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                    <DrawerOverlay />
                    <DrawerContent borderRadius={'15px 0 0 15px'} bgColor={'black'}>
                        <DrawerCloseButton />
                        <DrawerBody display={'flex'} flexDirection={'column'} gap={'25px'} pt={'70px'}>
                            <Link to={'/'} onClick={onClose}><Flex gap={'5px'}><Icon as={GiHamburger} w={'35px'} h={'35px'} /><Text fontFamily={'sans-serif'} fontWeight={700} fontSize={'25px'}>HOME</Text></Flex></Link>
                            <Flex gap={'5px'}><Icon as={BiFoodMenu} w={'35px'} h={'35px'} /><Text fontFamily={'sans-serif'} fontWeight={700} fontSize={'25px'}>MENU</Text></Flex>
                            <Link to={'/aboutus'} onClick={onClose}><Flex gap={'5px'}><Icon as={HiUserGroup} w={'35px'} h={'35px'} /><Text fontFamily={'sans-serif'} fontWeight={700} fontSize={'25px'}>SOBRE NÓS</Text></Flex></Link>
                            <Flex gap={'5px'}><Icon as={HiOutlineLocationMarker} w={'35px'} h={'35px'} /><Text fontFamily={'sans-serif'} fontWeight={700} fontSize={'25px'}>LOCALIZAÇÃO</Text></Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
            <Outlet />
        </Fragment>
    )
}

export default Layout
