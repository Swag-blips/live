import {
  game1,
  game2,
  game3,
  game4,
  streamer1,
  streamer2,
  streamer3,
  streamer4,
  streamer5,
} from "./assets";

interface GameStream {
  name: string;
  image: string;
  watching: string;
}

interface Streamers {
  name: string;
  image: string;
  followers: string;
}
export const gameStreams: GameStream[] = [
  {
    name: "Rokib",
    image: game1,
    watching: "1.5k",
  },
  {
    name: "Adinuba",
    image: game2,
    watching: "3.2k",
  },
  {
    name: "Joy",
    image: game3,
    watching: "5k",
  },
  {
    name: "lawerence",
    image: game4,
    watching: "2k",
  },
];

export const streamers: Streamers[] = [
  {
    name: "Loveth Eze",
    image: streamer1,
    followers: "12k",
  },
  {
    name: "Jude Prince",
    image: streamer2,
    followers: "20.2k",
  },
  {
    name: "Mary Joachim",
    image: streamer3,
    followers: "4.5k",
  },
  {
    name: "Emmanuel Eze",
    image: streamer4,
    followers: "15k",
  },
  {
    name: "Patience Oluoma",
    image: streamer5,
    followers: "1.4k",
  },
];
