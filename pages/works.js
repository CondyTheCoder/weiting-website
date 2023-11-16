import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/cf1.PNG'
 import thumbWalknote from '../public/images/works/bookstore.jpg'
 import thumbFourPainters from '../public/images/works/zoom-pic.webp'
 import thumbMenkiki from '../public/images/works/New-Meta1.png'
import thumbMargelo from '../public/images/works/spotify-1.png'
 import thumbModeTokyo from '../public/images/works/ai-block1.webp'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Web3.0 CrowdFunding" thumbnail={thumbInkdrop}>
          A Web 3.0 platform for crowdfunding campaigns on the blockchain, 
          for transparent and traceable fundraising.
          </WorkGridItem>
        </Section>
        

        <Section delay={0.1}>
          <WorkGridItem
            id="walknote"
            title=" Smart Meeting System"
            thumbnail={thumbFourPainters}
          >
            A zoom plugin application created to make meeting more engaging and interactive with AI technologies.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Food Metaverse">
          A social media that help you find restaurants that share similar food as your friends&apos; posts.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="fourpainters"
            title="Sci-Fi Bookstore"
            thumbnail={thumbWalknote}
          >
            Full Stack E-commerce Bookstore
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Decentralized AI Patient Record System"
          >
            An AI Decentralized Patient Record System
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Mini Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Script to Get Free Music">
            A python script that provides free music to poor college student.
          </WorkGridItem>
        </Section>

      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
