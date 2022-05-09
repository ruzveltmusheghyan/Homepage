import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, HumburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#ffffff0')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={50}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex>
          <Heading as="h1" size="xs" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                borderColor={useColorModeValue('whiteAlpha.200')}
                aria-label="Options"
              />
              <MenuList
                bgColor={useColorModeValue('white', 'orange.200')}
                color="blackAlpha.900"
              >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
