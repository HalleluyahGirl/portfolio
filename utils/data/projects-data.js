import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "youtube-clone",
    description:
      "Youtube Clone, i built this because i was tired of using youtube and always seeing youtube-ads and i wanted to build something that would subtitute youtube for me",
    tools: ["Javascript", "MongoDB", "Rapid API", "React"],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Uniswap Interface Clone",
    description: "I built Uniswap Clone using React, Solidity and Uniswap API",
    tools: [
      "Solidity",
      "HArdhat",
      "React",
      "Ethereum",
      "Ethers.js",
      "metamask",
    ],
    role: "Blockchain Developer",
    code: "",
    demo: "",
    image: ayla,
  },
  {
    id: 3,
    name: "Escrow Real Estate Smart Contract",
    description:
      "I decided to learn more on how real estate service works, so i had to try it out using solidity",
    tools: ["Solidity", "Brownie", "ethers.js", "web3.js, metamask"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "ChatGpt clone",
    description:
      "i love trying new things, so i came up with this. It's a clone of ChatGPT with few changes. I have used openai api for this.",
    tools: ["phython", "openai"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
