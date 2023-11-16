import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Web3.0 Crowdfunding Website<Badge>2023</Badge>
      </Title>
      <P>
      A Web 3.0 platform for crowdfunding campaigns on the blockchain, 
          for transparent and traceable fundraising. You can post a campaign, 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
            Help me deploy it by staring! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, TailwindCSS, React.JS, and Thirdweb Framework</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/lwtcxy/Crowdfunding-Application">
          https://github.com/lwtcxy/Crowdfunding-Application <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
      </List>

      <WorkImage src="/images/works/cf1.PNG" alt="Inkdrop" />
      <WorkImage src="/images/works/cf2.PNG" alt="Inkdrop" />
      <WorkImage src="/images/works/cf3.PNG" alt="Inkdrop" />
      <WorkImage src="/images/works/cf4.PNG" alt="Inkdrop" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
