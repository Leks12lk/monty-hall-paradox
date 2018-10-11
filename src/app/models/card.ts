
export interface ICard {
    id: number;
    type: CardType;
    inGame: boolean;
    selected: boolean;
}


export enum CardType {
    Sheep = 'Sheep',
    Car = 'Car'
}