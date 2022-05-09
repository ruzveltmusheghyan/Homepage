import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { Heading, SimpleGrid, Image } from '@chakra-ui/react'
import { NavItem } from '../nav-item'
import { FaUserCircle, FaCode, FaMicroblog } from 'react-icons/fa'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <title>Ruzvelt Musheghyan - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container w="full" maxW="container.md" pt={14}>
        <Box display="flex" alignItems="center" gap={2} my={5}>
          <Image
            src="/images/profile.jpg"
            maxW="80px"
            display="inline-block"
            borderRadius={50}
            borderStyle="solid"
            borderWidth={2}
            borderColor="whiteAlpha.800"
          />
          <Box>
            <Heading as="h2" fontSize={25}>
              Ruzvelt Musheghyan
            </Heading>
            <p>Software Engineer (Front-End developer)</p>
          </Box>
        </Box>
        <nav>
          <SimpleGrid mt={2} py={4} columns={2}>
            <NavItem href="/">
              <span>Bio</span>
              <FaUserCircle size={25} />
            </NavItem>
            <NavItem href="/works">
              <span>Works</span>
              <FaCode size={25} />
            </NavItem>
          </SimpleGrid>
        </nav>
      </Container>
      {children}
    </Box>
  )
}

export default Main
