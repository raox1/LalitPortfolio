import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container as ChakraContainer,
  Grid,
  GridItem,
  Link,
  Flex
} from '@chakra-ui/layout';
import Container from '@/layouts/container';
import * as tool from '@/data/tools';
import Icon from '@chakra-ui/icon';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from '@/utils/hooks/useToggle';
import { youtube, twitch, discord, twitter } from '@/data/socials';
import ContactForm from '@/components/contactForm';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { useColorModeValue } from '@chakra-ui/color-mode';

const About = () => {
  return (
    <Container title="About | Lalit Kumar">
      <ContentWrapper>
        <Intro />
        <Skills />
        <Contact />
      </ContentWrapper>
    </Container>
  );
};

const Intro = () => {
  return (
    <Box as="section">
      <Heading mb="6.5rem" w={{ base: '90%', sm: '100%' }} as="h1" variant="h1">
        About
      </Heading>
      <Heading mb="0.5rem" as="h3" variant="h3">
        Background
      </Heading>
      <ChakraContainer maxW={{ base: '20rem', sm: '30rem', md: '40rem' }} p={0}>
        <Text mb="2rem">
          Hey there! I’m Lalit, a Software developer focused on harnessing
          the power of technology to solve real-world problems and make a 
          difference in the world.
        </Text>
        <Text mb="2rem">
          I like to spend my time designing and building solutions, engaging
          with the community, as well as pushing myself to learn more through
          pair programming and group projects.
        </Text>
        <Text mb="6.5rem">
        I graduated with a degree in Engineering from Amity University Gurgaon 
        and have been working as a mobile developer, specializing in native iOS 
        and Android applications, with some experience in cross-platform development. 
        Alongside my work, I'm involved in various digital solutions projects and 
        have developed a passion for coding.
        </Text>
        <Heading mb="0.5rem" as="h3" variant="h3">
          What I’ve been up to
        </Heading>
        <Text mb="2rem">
          I've been recently focused on building IOS applications, diving
          deeper into Swift/SwiftUI itself as well as libraries and tools surrounding
          it. I've also been learning lots too-like how to test my code
          effectively, optimizing performance and I've also started recently
          learning Dart and already feeling the benefits of cross-platform
          and all the other great things it brings!{' '}
        </Text>
        <Text mb="2rem">
          I love to learn and build in public, which I’ve taken to the next
          level through live coding on <Link href={twitch.href}>Twitch</Link>{' '}
          and <Link href={youtube.href}>Youtube</Link>. I'm hoping to take this
          further by creating more content such as tutorials and courses.
        </Text>
        <Text mb="6.5rem">
        I worked as a mobile app consultant, gathering requirements and helping 
        clients translate their ideas into  successful  applications.   This 
        experience has allowed me to deepen my understanding of the mobile 
        app development process and work closely with clients to ensure their 
        needs are met. I’m grateful for the opportunity  to  contribute to 
        innovative projects and support the growth of the mobile app community!
        </Text>
        <Heading mb="0.5rem" as="h3" variant="h3">
          Interests
        </Heading>
        <Text mb="2rem">
          I’m currently interested in building and supporting the community
          around Mobile development, whether that be through my participation in
          Events, live streams, or through forums or discord.
        </Text>
        <Text mb="2rem">
          I’m also really into <em>Design Systems</em> and{' '}
          <em>Component Driven User Interfaces</em> and I love to explore the
          tools and techniques that help to create more scalable and
          maintainable UI’s.
        </Text>
        <Text mb="2rem">
          When I'm not coding (or writing or reading about it) you'll typically
          find me engaging with another creative or engaging activity such as
          writing music, 3D motion design,video editing, gaming, curating playlists, or
          occasionally getting lost in a Netflix series!
        </Text>
        <Text>
          Although I love to keep myself busy with activities, I also make sure
          to set aside time to spend with family, going for walks and runs, as
          well as taking some time out for self-reflection when I can.
        </Text>
      </ChakraContainer>
    </Box>
  );
};

const Skills = () => {
  // convert object properties to array for mapping
  const skills = Object.values(tool).slice(0, 12);
  return (
    <Box w="90%" alignSelf="center" as="section">
      <SectionHeading mb={{ base: '4rem', xl: '8rem' }}>
        Tools & Technologies
      </SectionHeading>
      <ChakraContainer
        maxW={{ base: '20rem', sm: '30rem', md: '40rem' }}
        textAlign="center"
        p={0}
      >
        <Text mb="8rem">
          One of my favourite things since I starting to learn to code has
          discovering all of the amazing tools and abstractions developers have
          created to make theirs and other developers' lives easier. Here are
          some of the tools I use most frequently.
        </Text>
      </ChakraContainer>
      <Grid
        m="auto"
        // w={{ md: '80%' }}
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
        as="ul"
      >
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            key={skill.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

const Skill = ({ name, icon, color }) => {
  const [hover, toggleHover] = useToggle();
  return (
    <GridItem
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      p={{ base: '0.5rem', '2xl': '1rem' }}
      textAlign="center"
      alignContent="center"
      display="flex"
      flexDirection="column"
      listStyleType="none"
      as="li"
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: '2rem', lg: '3rem', '2xl': '4rem' }}
        as={icon}
        fill={hover && color}
        transitionDuration="500ms"
      />
      {name}
    </GridItem>
  );
};

const Contact = () => {
  const { themed } = useColorModeSwitcher();
  return (
    <Box id="contact" p={{ base: '1rem', md: 0 }} as="section">
      <SectionHeading mb="4rem">Get in touch</SectionHeading>
      <Flex
        borderRadius="md"
        direction={{ base: 'column', xl: 'row' }}
        m="auto"
        p="4rem"
      >
        <ChakraContainer
          m={{ base: '0 0 4rem 0', xl: '0 4rem 0 0' }}
          maxW="20rem"
          p={0}
        >
          <Text mb="1rem" variant="preTitle">
            Let's chat!
          </Text>
          <Text mb="2rem">
            If you have any questions, opportunities or would just like to say
            hey then feel free to fill out my contact form and I'll endeavour to
            get back to you as soon as I can.
          </Text>
          <Text>
            Or if you would prefer to, you can also reach me on{' '}
            <Link color={themed} href={twitter.href}>
              twitter
            </Link>{' '}
            {`and `}
            <Link color={themed} href={discord.href}>
              discord
            </Link>
            .
          </Text>
        </ChakraContainer>
        <ContactForm />
      </Flex>
    </Box>
  );
};

const SectionHeading = ({ children, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <HStack {...props} w="100%">
      <Box flex="1" h="1px" bg={colorGrey} />
      <Heading textAlign="center" px="1rem" as="h3" variant="h3">
        {children}
      </Heading>
      <Box flex="1" h="1px" bg={colorGrey} />
    </HStack>
  );
};
export default About;
