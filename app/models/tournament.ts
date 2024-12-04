import { Player } from "./player"

export interface Tournament {
    Id: number,
    Title: string,
    StartAt: Date
    Participants: Player[],
    IsPremier: boolean
}