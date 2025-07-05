import { v4 as uuidv4 } from "uuid";
import fainted from "./music/fainted.mp3";
import memoryReboot from "./music/memory-reboot.mp3";
import interlinked from "./music/interlinked.mp3";
import herEyes from "./music/her-eyes.mp3";
import cornChase from "./music/cornfield-chase.mp3";
import deathIsNoMore from "./music/death-is-no-more.mp3";
import gameOn from "./music/the-game-is-on.mp3";
import sherlock from "./music/sherlock-theme.mp3";
import LTheme from "./music/L-theme.mp3";
import sweden from "./music/sweden.mp3";
import september from "./music/september.mp3";
import ghostyboy from "./music/ghostyboy.mp3";
import experience from "./music/experience.mp3";
import idea22 from "./music/idea-22.mp3";
import destinationUnknown from "./music/destination-unknown.mp3";
import illDoIt from "./music/ill-do-it.mp3";
import roi from "./music/roi.mp3";
import yourLoveIsMyDrug from "./music/your-love-is-my-drug.mp3";

function chillHop() {
  return [
    {
      name: "Sherlock Theme",
      cover: "https://i.scdn.co/image/ab67616d0000b2737c0d73cf3a7369efdd3cc847",
      artist: "Michael Price, David Arnold",
      audio: sherlock,
      color: ["#2d2327", "#504541"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Beaver Creek",
      cover: "https://i.scdn.co/image/ab67616d0000b27392ea33b2d11348d692352a33",
      artist: "Middle School, Aso, Aviino",
      audio: "https://stream.chillhop.com/mp3/10076",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Carefree",
      cover: "https://i.scdn.co/image/ab67616d0000b2730ba479e58e7bfd2164074183",
      artist: "dryhope, Gustav Gustav",
      audio: "https://stream.chillhop.com/mp3/9311",
      color: ["#642c56", "#c25575"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cornfield Chase",
      cover: "https://i.scdn.co/image/ab67616d0000b273ac29a65e7ffcfa6f9cb0d342",
      artist: "Hans Zimmer",
      audio: cornChase,
      color: ["#374a51", "#84969d"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover: "https://i.scdn.co/image/ab67616d00001e02797b1f1ca8576715f8708f65",
      artist: "Aiguille",
      audio: "https://stream.chillhop.com/mp3/58858",
      color: ["#ef8ea9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Death Is No More",
      cover: "https://i.scdn.co/image/ab67616d0000b27369b608971ba7b3e6835e2189",
      artist: "Blessed Mane",
      audio: deathIsNoMore,
      color: ["#540609", "#96140b"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Destination Unknown",
      cover: "https://i.scdn.co/image/ab67616d00001e0285ff60eb1d25d1c310ff1be9",
      artist: "Ugonna Onyekwe",
      audio: destinationUnknown,
      color: ["#00508f", "#007fb3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Experience",
      cover: "https://i.scdn.co/image/ab67616d0000b2736c8ef0538e04f2e28380dcc5",
      artist: "Ludovico, Einaudi",
      audio: experience,
      color: ["#2f551a", "#66a539"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "I'll do it",
      cover: "https://i.scdn.co/image/ab67616d00001e02d37dee0d87190156c78e020d",
      artist: "Heidi Montag",
      audio: illDoIt,
      color: ["#003770", "#956ca7"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fainted",
      cover: "https://i.scdn.co/image/ab67616d00001e024812bcd7da9edf3ecc02d558",
      artist: "Narvent",
      audio: fainted,
      color: ["#322e8c", "#9946e0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Her Eyes",
      cover: "https://i.scdn.co/image/ab67616d0000b273f8a965b08dcd7727b41b7e26",
      artist: "Narvent",
      audio: herEyes,
      color: ["#0d246a", "#106ac9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "I am Never Enough",
      cover: "https://i.scdn.co/image/ab67616d0000b273c2d32d36ebd4853f2d8ceacd",
      artist: "Ghostyboy",
      audio: ghostyboy,
      color: ["#1f1f1f", "#717171"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Idea 22",
      cover: "https://i.scdn.co/image/ab67616d0000b273ea8460e3b95df64cdd3c9692",
      artist: "Gibran Alcoler",
      audio: idea22,
      color: ["#181d23", "#647583"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Impulse",
      cover: "https://i.scdn.co/image/ab67616d00001e024a9579be37cb47a26d37b33b",
      artist: "Enough Cereals",
      audio: "https://stream.chillhop.com/mp3/75137",
      color: ["#633135", "#ec81a2"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Interlinked",
      cover: "https://i.scdn.co/image/ab67616d0000b273cf879ed8851649b8189dbe5e",
      artist: "Lonely Lies, GOLDKID$",
      audio: interlinked,
      color: ["#342c50", "#7e6db3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover: "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
      artist: "Swørn",
      audio: "https://stream.chillhop.com/mp3/9222",
      color: ["#cd607d", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "L'aventure",
      cover: "https://i.scdn.co/image/ab67616d00001e024a9579be37cb47a26d37b33b",
      artist: "Enough Cereals",
      audio: "https://stream.chillhop.com/mp3/75139",
      color: ["#633135", "#ec81a2"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Your Love is My Drug",
      cover: "https://i.scdn.co/image/ab67616d00001e026d0025197be66ddadfa18deb",
      artist: "Kesha",
      audio: yourLoveIsMyDrug,
      color: ["#2a2b2a", "#454642"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "L's Theme",
      cover:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84afb0e354a5ed2ca38e661c58",
      artist: "Deathnote",
      audio: LTheme,
      color: ["#333333", "#7d7d7d"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Memory Reboot",
      cover: "https://i.scdn.co/image/ab67616d00001e0242a71cca827a8d0abda07e49",
      artist: "Narvent, VØJ",
      audio: memoryReboot,
      color: ["#052d47", "#106f9f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover: "https://i.scdn.co/image/ab67616d00001e02797b1f1ca8576715f8708f65",
      artist: "Aiguille",
      audio: "https://stream.chillhop.com/mp3/9148",
      color: ["#ef8ea9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover: "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
      artist: "Swørn",
      audio: "https://stream.chillhop.com/mp3/9228",
      color: ["#cd607d", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Roi",
      cover: "https://i.scdn.co/image/ab67616d00001e0205f5045b4ff6cb74fa963f96",
      artist: "VIDEOCLUB",
      audio: roi,
      color: ["#101b2e", "#2f3878"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "September",
      cover: "https://i.scdn.co/image/ab67616d0000b2734285bbf51dd2f011b5998dfd",
      artist: "Sparky Deathcap",
      audio: september,
      color: ["#6d755f", "#c8d1b7"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sweden",
      cover: "https://i.scdn.co/image/ab67616d0000b273aaeb5c9fb6131977995b7f0e",
      artist: "C418",
      audio: sweden,
      color: ["#2f551a", "#72b740"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Game Is On",
      cover: "https://i.scdn.co/image/ab67616d0000b2737c0d73cf3a7369efdd3cc847",
      artist: "Michael Price, David Arnold",
      audio: gameOn,
      color: ["#2d2327", "#504541"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under The City Stars",
      cover: "https://i.scdn.co/image/ab67616d0000b27392ea33b2d11348d692352a33",
      artist: "Middle School, Aso, Aviino",
      audio: "https://stream.chillhop.com/mp3/10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
