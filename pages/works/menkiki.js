import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Food Metaverse <Badge>2022</Badge>
      </Title>
      <P>
      Welcome to New Meta, the innovative social media platform that reimagines the way we connect, share, and discover. Inspired by the familiar interface of Twitter, New Meta takes your social media experience to the next level with advanced, user-friendly features. Whether you're looking to engage with a global community, stay updated on the latest trends, or share your daily experiences, New Meta offers a seamless and dynamic platform for all. Our intuitive design ensures easy navigation and interaction, making it perfect for both seasoned social media users and newcomers.
      </P>
      
      <UnorderedList my={4}>
        <ListItem>Share personal photos with your own group of friends</ListItem>
        <ListItem>Connect with your friends&apos; friends</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MERN(MongoDB, Express, React, Node)</span>
        </ListItem>
        <ListItem>
          <Meta>To Do</Meta>
          <span>A new feature that can search for restaurants near you that has similar food as your friend&apos;s posts </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/caffedeoshou-qing-ben-ge-deipuraninguiosapuri">
            Caffeでお手軽本格ディープラーニングアプリ @potatotips{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/lwtcxy/MERN-Social-Website">
          https://github.com/lwtcxy/MERN-Social-Website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}
      <WorkImage src="/images/works/New-Meta1.png" alt="menkiki" />
      <WorkImage src="/images/works/New-Meta2.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/New-Meta3.png" alt="menkiki" />
        <WorkImage src="/images/works/New-Meta4.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
