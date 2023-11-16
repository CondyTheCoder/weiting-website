import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'


import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software engineer from Virginia Tech!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Weiting Li
          </Heading>
          <p>Software Developer/ Machine Learning Engineer  </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Weiting.jpg"
              alt="Profile image"
              borderRadius="full"
              objectFit="cover"
              width="300"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Weiting is a software developer based in Virginia, USA with a
          passion for building products he likes. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. Recently, he is graduating from <strong>Virginia Tech</strong> with a 
          Master&apos;s degree of Engineering in Computer Science. His main interests are software development, blockchain, LLM, AI..
          
          
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Chongqig (重庆), China.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated from the Bachelor&apos;s Program of
          Computational Modeling & Data Analytics at Virginia Tech
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated from the master&apos;s of Engineering Program at Virginia Tech
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>Looking for a FT Software Engineer position (Fullstack)
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work experience
        </Heading>
        <BioSection>
          <BioYear>2018</BioYear>
          Undergraduate Research Assistant for Parallel Computing Group@VT
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Machine Learning Engineer for VTTI (Virginia Tech Transporation Institute)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Deep Learning Engineer at Commonwealth Cyber Initiative
        </BioSection>
        <BioSection>
          <BioYear>2023 to Present</BioYear>Working for ZenAI as Software Engineer intern
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Basketball, Music
          {/* <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link> */}
          , Playing Guitar,
           Photography, Board Game, Competitive Video Games, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/weiting-li-662215197/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin/>}
              >
                @Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="weitil6@Vt.edu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon/>}
              >
                weitil6@vt.edu
              </Button>
            </Link>
          </ListItem>
          {/* // <ListItem>
          //   <Link href="https://twitter.com/craftzdog" target="_blank">
          //     <Button
          //       variant="ghost"
          //       colorScheme="teal"
          //       leftIcon={<IoLogoTwitter />}
          //     >
          //       @craftzdog (日本語)
          //     </Button>
          //   </Link>
          // </ListItem>
          // <ListItem>
          //   <Link href="https://instagram.com/craftzdog" target="_blank">
          //     <Button
          //       variant="ghost"
          //       colorScheme="teal"
          //       leftIcon={<IoLogoInstagram />}
          //     >
          //       @craftzdog
          //     </Button>
          //   </Link>
          // </ListItem> */}
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p> */}

        {/* <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
