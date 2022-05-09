import { Heading, Container, Text, Box } from '@chakra-ui/react'
export const NotFound = () => {
  return (
    <Container maxW="container.md">
      <Heading as="h1">Not found</Heading>
      <Text>The page you're looking for is unavaiable! :(</Text>
    </Container>
  )
}

export default NotFound
