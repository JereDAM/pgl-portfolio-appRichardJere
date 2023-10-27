import { ImageProps } from "react-native"

export type JereCardData = {
    image: ImageProps,
    title: string,
    body: string
}

export const JereCardData: JereCardData[] = [
    {
        image:require("./../assets/SofyanAmrabat.jpg"), //TODO PONER FOTO MIA
        title: 'Sobre mi',
        body:"EEEEEL LELEEEEEEEEE"
    }
]