import { Player } from "./player";
import { Tournament } from "./tournament";

export interface Result {
    id: number, 
    tournament: Tournament,
    player: Player,
    placing: number
}