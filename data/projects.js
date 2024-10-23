import { Logo } from '@/components/svg/logo';
import { MagicMirrorLogo } from '@/components/svg/mmLogo';
import {
  android,
  chakra,
  electron,
  figma,
  firebase,
  git,
  nextjs,
  nodejs,
  react,
  socketIO,
  storybook,
  swift,
  typescript
} from './tools';
import { v4 as uuidv4 } from 'uuid';

export default [

  {
    logo: null,
    title: 'IOS Catalog',
    description:
      'An application to show capabilites of IOS, Developed with swift and swiftUI, it is for someone new learning the basics of apple mobile dev. This app is made to ease out the journey of others, someone can easily understand the code and replicate.',
    tools: [swift, figma, firebase, git],
    live: 'https://github.com/raox1/firstAppIOS',
    proto: null,
    repo: 'https://github.com/raox1/firstAppIOS',
    id: uuidv4(),
    feature: true
  },


    {
    logo: null,
    title: 'Food Plaza IOS',
    description:
      'Welcome to Food Plaza, your digital dining guide! Developed with Swift and Firebase, utilizing SwiftUI for a smooth user experience. This app was inspired by the growing need for food recommendations and reviews in restaurants.',
    tools: [swift, figma, firebase, git],
    live: 'https://github.com/raox1/FoodPlazaIOS',
    proto: null,
    repo: 'https://github.com/raox1/FoodPlazaIOS',
    id: uuidv4(),
    feature: true
  },


  {
    logo: null,
    title: 'Food Plaza Android',
    description:
      'Welcome to Food Plaza, your digital dining guide! Developed with Kotlin and Firebase, utilizing Compose for a smooth user experience. This app was inspired by the growing need for food recommendations and reviews in restaurants.',
    tools: [android, figma, firebase, git],
    live: 'https://github.com/raox1/FoodPlazaIOS',
    proto: null,
    repo: 'https://github.com/raox1/FoodPlazaIOS',
    id: uuidv4(),
    feature: false
  },


  // {
  //   logo: null,
  //   title: 'Guestbook',
  //   description:
  //     'My own personal guestbook which I invite you to sign! Created with Next.js + Prisma + Typescript + NextAuth for authentication. Inspired by Lee Robinson.',
  //   tools: [react, nextjs, typescript, chakra],
  //   live: 'https://gregs-guestbook.vercel.app/',
  //   proto: null,
  //   repo: 'https://github.com/gregogun/my-guestbook',
  //   id: uuidv4(),
  //   feature: true
  // },
  // {
  //   logo: <Logo />,
  //   title: 'Portfolio V2',
  //   description:
  //     'This site! Building the second iteration of my personal portfolio, being live-documented on Twitch and Youtube.',
  //   tools: [react, nextjs, storybook, figma],
  //   live: null,
  //   proto: null,
  //   repo: 'https://github.com/gregogun/portfolio-v2',
  //   id: uuidv4(),
  //   feature: false
  // },
  // {
  //   logo: <MagicMirrorLogo />,
  //   title: 'Magic Mirror (React)',
  //   description:
  //     'An IoT project inspired by the original Magic Mirror by Michael Teeuw. Having no experience with Angular, it seemed like a good oppoertunity to build with React!',
  //   tools: [react, electron, nodejs, socketIO],
  //   live: null,
  //   proto:
  //     'https://www.figma.com/proto/miwkYYZhCHXaGtNZ2O13bb/MyMagicMirror---UI?page-id=210%3A1&node-id=205%3A116&viewport=194%2C368%2C0.16894406080245972&scaling=scale-down',
  //   repo: 'https://github.com/gregogun/magic-mirror-react',
  //   id: uuidv4(),
  //   feature: true
  // },
  // {
  //   logo: <Logo />,
  //   title: 'Portfolio V1',
  //   description:
  //     'The first iteration of my personal portfolio built with React and Chakra UI.',
  //   tools: [react, chakra],
  //   live: 'https://gregogun.netlify.app/',
  //   prototype: null,
  //   repo: 'https://github.com/gregogun/portfolio-v1',
  //   id: uuidv4(),
  //   feature: false
  // },
  // {
  //   logo: null,
  //   title: 'gitjobs',
  //   description:
  //     'A job board built with the Github Jobs API, with reimagined design and functionality.',
  //   tools: [react, chakra],
  //   live: 'https://go-gitjobs.netlify.app/',
  //   proto: null,
  //   repo: 'https://github.com/gregogun/my-guestbook',
  //   id: uuidv4(),
  //   feature: false
  // }
];
