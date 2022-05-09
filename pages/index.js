import {
  Container,
  Heading,
  Link,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem,
  Button,
  Icon,
  useToast
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
} from 'react-icons/io5'
const Page = () => {
  const copiedToClipboard = useToast()

  const copyToClipboard = () => {
    copiedToClipboard({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 1000,
      isClosable: true
    })
    navigator.clipboard.writeText('Royalty#5148')
  }

  return (
    <Container maxW="container.md">
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Bio
        </Heading>
        <Paragraph>
          React JS developer with 1 year of experience. 22 Years old.
          Communication skills and ability to work in team environment.
          Passionate about personal growth and for software development. Ready
          to apply my passion for coding to develop quality solutions. .{' '}
          <NextLink href="https://github.com/ruzveltmusheghyan" passHref>
            <Link
              color={useColorModeValue('purple', 'pink.400')}
              target="_blank"
            >
              Github
            </Link>
          </NextLink>
        </Paragraph>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Me on the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ruzveltmusheghyan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @ruzveltmusheghyan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/itsruvibro" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                itsruvibro
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/ruzvelt-musheghyan-147611233/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                ruzveltmusheghyan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<Icon as={IoLogoDiscord} />}
                onClick={() => copyToClipboard()}
              >
                Royalty#5148
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Page
