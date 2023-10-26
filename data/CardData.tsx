import { ImageProps } from "react-native";

export type CardData = {
  image: ImageProps;
  title: string;
  body: string;
};

export const cardData: CardData[] = [
  {
    image: require("./../assets/SofyanAmrabat.jpg"),
    title: "¡Mi descripción!",
    body: "Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos",
  },
];
