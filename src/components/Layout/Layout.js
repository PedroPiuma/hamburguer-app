import { Flex, Text, Icon } from "@chakra-ui/react"
import { Fragment } from "react"
import { Outlet } from 'react-router-dom'
import { GiHamburgerMenu, GiHamburger } from 'react-icons/gi'

const Layout = () => {
    return (
        <Fragment>
            <Flex border={'1px solid white'} position='fixed' top={0} w={['100%']} align='center' justify={'space-between'} px={'15px'} py={'20px'} bgColor='#000000'>
                <Flex align={'center'} gap={'15px'}><Icon as={GiHamburger} w={'35px'} h={'35px'} /><Text>The Burger </Text></Flex>
                <Icon as={GiHamburgerMenu} w={'35px'} h={'35px'} />
            </Flex>
            <Outlet />
        </Fragment>
    )
}

export default Layout
