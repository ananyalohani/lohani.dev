const projects: Project[] = [
  {
    title: 'Teams',
    description:
      'A fully-featured video-calling platform that supports video call, group chat, authentication, displaying network quality status, background filters, etc.',
    links: [
      {
        type: 'website',
        link: 'https://msft.lohani.dev',
      },
      {
        type: 'github',
        link: 'https://github.com/ananyalohani/teams',
      },
      {
        type: 'youtube',
        link: 'https://youtu.be/qoQxXQ06DRE',
      },
    ],
    image: '/images/projects/teams.png',
    tags: [
      'Next.js',
      'React',
      'TailwindCSS',
      'NodeJS',
      'Express',
      'MongoDB',
      'Mongoose',
      'Twilio Video',
    ],
  },
  {
    title: 'Pixell',
    description:
      'A pixel art NFT marketplace on the Ethereum blockchain. The platform supports creation, minting, selling and buying of pixel art NFTs on the Ropsten Testnet.',
    links: [
      {
        type: 'website',
        link: 'https://pixell.vercel.app',
      },
      {
        type: 'github',
        link: 'https://github.com/ananyalohani/pixell',
      },
    ],
    image: '/images/projects/pixell.png',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Solidity',
      'Hardhat',
      'Prisma',
      'MetaMask',
    ],
  },
  {
    title: 'Ecstacy',
    description:
      'A secure, e-commerce website developed primarily to facilitate buying and selling of products among users',
    links: [
      {
        type: 'github',
        link: 'https://github.com/ecstacy-fcs/client',
      },
    ],
    image: '/images/projects/ecstacy.jpeg',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Chakra UI',
      'Express',
      'Prisma',
      'Nginx',
    ],
  },
  {
    title: 'Tiiime',
    description:
      'A prototype of a crowdsourced time management app for IIIT Delhi students.',
    links: [
      {
        type: 'behance',
        link: 'https://ananya.li/tiiime',
      },
      {
        type: 'figma',
        link: 'https://www.figma.com/file/9kd9hljQSiMij2e2ailPmQ/Tiiime?node-id=358%3A155',
      },
    ],
    image: '/images/projects/tiiime.png',
    tags: ['Figma', 'Miro', 'Excalidraw', 'UI/UX', 'Prototyping'],
  },
  {
    title: 'Mausam',
    description:
      'A single-page web app that fetches the weather data for the next 6 days from the Metaweather API.',
    links: [
      {
        type: 'website',
        link: 'https://mausam.vercel.app',
      },
      {
        type: 'github',
        link: 'https://github.com/ananyalohani/mausam',
      },
    ],
    image: '/images/projects/mausam.png',
    tags: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Metaweather API',
      'OpenStreetMap API',
    ],
  },
  {
    title: 'IIITD Playbook',
    description:
      'IIITD Playbook provides multiple strategies, experiences, and stories to guide the current students of IIIT Delhi.',
    links: [
      {
        type: 'website',
        link: 'https://iiitdplaybook.web.app',
      },
      {
        type: 'github',
        link: 'https://github.com/iiitdplaybook/iiitdplaybook',
      },
    ],
    image: '/images/projects/playbook.png',
    tags: ['React', 'CSS', 'Material UI', 'Google Firebase'],
  },
  {
    title: 'Color Switch',
    description:
      'A clone of the popular mobile game Color Switch for desktop built using object-oriented and event-driven programming.',
    links: [
      {
        type: 'github',
        link: 'https://github.com/ananyalohani/color-switch-java',
      },
    ],
    image: '/images/projects/color-switch.png',
    tags: ['Java', 'JavaFX', 'FXML', 'CSS', 'Gradle'],
  },
  {
    title: 'lohanish',
    description:
      'A Unix shell coded in C, consisting of 10 commands with 2 options each and accepting all possible arguments.',
    links: [
      {
        type: 'github',
        link: 'https://github.com/ananyalohani/lohanish',
      },
    ],
    image: '/images/projects/lohanish.png',
    tags: ['C', 'Linux', 'Unix'],
  },
  {
    title: 'Perceptris',
    description:
      'A multiplayer, gesture-controlled version of the game Tetris using ultrasonic, touch and piezoelectric sensors.',
    links: [
      {
        type: 'github',
        link: 'https://github.com/ananyalohani/Perceptris',
      },
      {
        type: 'youtube',
        link: 'https://youtu.be/RkxJqoUfYXY',
      },
    ],
    image: '/images/projects/perceptris.png',
    tags: ['Arduino', 'Processing', 'C++', 'Rapid Prototyping'],
  },
];

export interface Project {
  title: string;
  description: string;
  links: {
    type: 'youtube' | 'github' | 'website' | 'behance' | 'link' | 'figma';
    link: string;
  }[];
  image: string;
  tags: string[];
}

export default projects;
