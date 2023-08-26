import {makeAutoObservable} from "mobx";
import {INotes} from "../data/INotes";

class NoteStore {
    clients: INotes[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

export const noteStore = new NoteStore();