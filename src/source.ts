import { game1, game2, game3, game4 } from "./assets";

interface GameStream {
  name: string;
  image: string;
  watching: string;
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
