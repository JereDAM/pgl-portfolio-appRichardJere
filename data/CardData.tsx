import { ImageProps } from "react-native";

export type CardData = {
  id: number;
  image: ImageProps;
  title: string;
  body: string;
  imageBackground: ImageProps;
};

export const cardData: CardData[] = [
  {
    id: 1,
    image: require("./../assets/lee.jpg"),
    title: "Ricardo Colleman",
    body: "Soy un intento de culturista , al que le gusta reirse de las personas con alopecia degenerativa (es irónico porque yo tambien lo tengo)",
    imageBackground: require("./../assets/goldo.jpg"),
  },
  {
    id: 2,
    image: require("./../assets/SoyEse.png"),
    title: "Sobre mi",
    body: "Soy alumno de 2ºDAM y espero poder llegar a poder desarrollar mi propio videojuego. \nある中国人はかつてこう言いました。チンギンガン、チーチュンギンガン、チュチュチアオチョ ",
    imageBackground: require("./../assets/jerebackground2.jpg"),
  },
];
