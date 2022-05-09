import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbnailMovies from '../public/images/thumbnail_movies_app.png'
import thumbnailShop from '../public/images/thumbnail_shop_app.png'
import thumbnailInstagram from '../public/images/thumbnail_instagram.png'
import Layout from '../components/layouts/article'
const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="container.md">
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="github"
              title="tsMovie"
              thumbnail={thumbnailMovies}
            >
              Movie Application based on React and Typescript
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="mshop"
              title="Mobile Shop"
              thumbnail={thumbnailShop}
            >
              E-commerce mobile shop
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="instagram"
              title="Instagram Copy"
              thumbnail={thumbnailInstagram}
            >
              Copy of the Instagram (for educational purposes)
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
