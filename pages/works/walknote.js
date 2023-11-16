import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Smart Meeting System - SMS<Badge>2023</Badge>
      </Title>
      <P>
        SMS is a productivity tool that intends to make virtual meetings more engaging with AI technologies!
        There are two unique features of SMS that is able to accomplish that:
      </P>
      <ul>
          <li><strong>Smart Meeting Scheduler</strong>: An AI-based scheduling system using Constraint Programming and Google OR-Tools, integrated with
Google Calendar API, to efficiently automate meeting time selection for PMs and enhance work efficiency.</li>
          
          <li><strong>Emotional Detection Tool</strong>: A real-time emotion detection tool using DeepFace and OpenCV, and Python with Flask for backend
integration. It allows administrators to adapt meeting content in response to attendee emotions, resulting in a 15%
increase in participant interaction.</li>
      </ul>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC Zoom</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2016/09/06/farewell-from-walknote/">
            音楽発掘アプリwalknoteクローズのお知らせ{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Flask, Constraint Programming, Google Calendar API, Zoom API</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jiayizhg/smart-meeting-system">
          https://github.com/jiayizhg/smart-meeting-system <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
      </List>
      
      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading> */}

     

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/zoom-pic1.webp" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid> */}
      <WorkImage src="/images/works/zoom-pic1.webp" alt="walknote" />
      {/* <WorkImage src="/images/works/zoom-pic1.webp" alt="walknote" />
      <WorkImage src="/images/works/walknote_05.png" alt="walknote" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
