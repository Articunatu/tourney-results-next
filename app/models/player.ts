import { Result } from "./result";

export interface Player {
    id: number,
    tag: string,
    resultList: Result[],
}