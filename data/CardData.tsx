import { ImageProps } from "react-native";

export type CardData = {
  id: number,
  image: ImageProps,
  title: string,
  body: string,
  imageBackground: ImageProps
};

export const cardData: CardData[] = [
  {
    id:1,
    image: require("./../assets/SofyanAmrabat.jpg"),
    title: "¡Mi descripción!",
    body: "Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos",
    imageBackground:require("./../assets/jerebackground.webp")
  },
  {
    id:2,
    image:require("./../assets/SoyEse.png"),
    title: 'Sobre mi',
    body:"Soy alumno de 2ºDAM y espero poder llegar a poder desarrollar mi propio videojuego. \nある中国人はかつてこう言いました。チンギンガン、チーチュンギンガン、チュチュチアオチョ ",
    imageBackground:require("./../assets/jerebackground2.jpg")
  }
]
