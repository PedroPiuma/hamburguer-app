import { Flex, Box, Text, Image } from '@chakra-ui/react'
import teste from '../../img/hamburguerHomeImage.png'

const HamburgerBox = (props) => {
    const { img = teste, title = 'Title', price = '21,00', ingredients = 'Grilled beef patty, 2 x eggs, 2 x crispy bacon, lettuce, tomato, spanish onion, homemade aioli, tomato relish, + blue, brie, swiss or cheddar cheese' } = props
    return (
        <Flex direction={'column'} align={'center'} p={'50px'} border={'1px solid red'}>
            <Image src={img} h={'200px'} />
            <Box w={'100%'}>
                <Text fontFamily={'sans-serif'} fontSize={'28px'}>{title.toUpperCase()}</Text>
                <Text color={'red'} fontFamily={'sans-serif'} fontSize={'28px'}>R${price}</Text>
                <Text fontFamily={'sans-serif'} fontSize={'20px'}>INGREDIENTES:</Text>
                <Text as='em'>{ingredients}</Text>
            </Box>
        </Flex>
    )
}

export default HamburgerBox
