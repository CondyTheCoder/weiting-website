import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Decentralized AI Patient Record System <Badge>2022</Badge>
      </Title>
      <P>
        This is an application that aims to help store sensitive data and help doctors diagnose potential Covid-19 positive
based on specific features with secure data from blockchain network.
      </P>
      <P>We programmed a smart contract deployed to Ethereum network based on Ganache using Solidity for patients and doctors
to upload medical data to the blockchain.</P>
      <P>In addition, we developed a Flask + Vue.js web page for users to access results and for authorized individual to upload data to
Ethereum; supported by MetaMask.</P>
<P>At last, we applied a deep learning algorithm called svm (support vector machines) to help us predict if a patient is covid positive or not.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Solidity, Python, Tensorflow, MetaMask</span>
        </ListItem>
        <ListItem>
          <Meta>PDF</Meta>
          <Link href="https://github.com/lwtcxy/Blockchain-Medical-Record-System-with-Machine-Learning/blob/main/Blockchain-Report.pdf">
          Report <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/lwtcxy/Blockchain-Medical-Record-System-with-Machine-Learning">
          https://github.com/lwtcxy/Blockchain-Medical-Record-System-with-Machine-Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
