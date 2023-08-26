import {makeAutoObservable} from "mobx";
import axiosInstance from "http/axios";
import {IVideo} from "data/IVideo";

class VideoStore {
    videos: IVideo[] = []

    setVideos(videos: IVideo[]) {
        this.videos = videos
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async fetchVideos() {
        try {
            const res = await axiosInstance.get<IVideo[]>("/videos")
            this.setVideos(res.data)
        } catch (e) {
            console.error("fetchClients", e)
        }
    }
}

export const videoStore = new VideoStore();