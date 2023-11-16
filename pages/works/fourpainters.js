import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        E-Bookstore <Badge>2022</Badge>
      </Title>
      <P>
      A Full Stack E-bookstore that recommends most trendy Sci-Fi books for Sci-Fi readers featuring authentication,
authorization, session management, and payment following <strong>RESTful API</strong>.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MySQL, Spring, TypeScript, Node.js Vue.js, and Express.js</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/lwtcxy/FullStack-E-Bookstore">
          https://github.com/lwtcxy/FullStack-E-Bookstore <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
        
      </List>


      {/* <WorkImage
        src="/images/works/the-four-painters_eyecatch.jpg"
        alt="walknote"
      /> */}
      <WorkImage src="/images/works/bookstore.jpg" alt="ebookstore" />
      {/* <WorkImage src="/images/works/the-four-painters_02.jpg" alt="walknote" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
