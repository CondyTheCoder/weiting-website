import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        Script for Free Music  <Badge>2022</Badge>
      </Title>
      <P>
        This is a script that I built to scrape my music list from Spotify and direct to Youtube to download free music for students like myself.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Python, SpotifyAPI, BeautifulSoup4
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/lwtcxy/SpotifyToYoutubeAPP">
          https://github.com/lwtcxy/SpotifyToYoutubeAPP <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
      </List>
    </Container>

    <WorkImage src="/images/works/spotify-1.png" alt="Inkdrop" />
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
