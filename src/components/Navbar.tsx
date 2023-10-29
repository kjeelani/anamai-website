import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface NavLinkProps {
    name: string,
    active: boolean,
    url: string
}

interface NLink {
    key: string,
    name: string,
    url: string
}

const Links: NLink[] = [
    {key: '0', name: 'Sprite Animator', url: "/"}, 
    {key: '1', name: 'Sprite Imaginator', url: "/sprite_imaginator"}, 
    {key: '2', name: 'Landscape Imaginator', url: "/landscape_imaginator"}, 
    {key: '3', name: 'SFX Synthesizer', url: "/sfx_synthesizer"}
]

const NavLink = (props: NavLinkProps) => {
    const activeColor = 'pink.700';
    const unactiveColor = 'gray.200';
    return (
        <>
    {props.active 
    ? 
    <Box
        as="a"
        px={"2vw"}
        py={"2.67vh"}
        rounded={'sm'}
        backgroundColor={activeColor}
        _hover={{
        textDecoration: 'none',
        bg: activeColor,
        }}
        href={props.url}>
        {props.name}
    </Box> 
    : 
    <Box
        as="a"
        px={"2vw"}
        py={"2.67vh"}
        rounded={'sm'}
        _hover={{
        textDecoration: 'none',
        bg: unactiveColor,
        }}
        href={props.url}>
        {props.name}
    </Box> 
    }
    </>
    )
}


interface NavbarProps {
    active: string
}

export default function Navbar(nvprops: NavbarProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
                <Avatar
                    size={'sm'}
                    src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                />
            </Flex>
            <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={0} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                    <NavLink 
                        key={link.key} 
                        active={nvprops.active == link.key} 
                        url={link.url}
                        name={link.name}
                    />
                ))}
            </HStack>
            </HStack>
        </Flex>

        {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                    <NavLink 
                        key={link.key} 
                        active={nvprops.active == link.key} 
                        url={link.url}
                        name={link.name}
                    />
                ))}
            </Stack>
            </Box>
        ) : null}
        </Box>
    </>
    )
}