import {makeAutoObservable} from "mobx";
import {IVideo} from "../data/IVideo";

class VideoStore {
    clients: IVideo[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

export const videoStore = new VideoStore();