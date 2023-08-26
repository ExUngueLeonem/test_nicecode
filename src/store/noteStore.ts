import {makeAutoObservable} from "mobx";
import {INote} from "data/INote";
import axiosInstance from "http/axios";

class NoteStore {
    notes: INote[] = []

    setNotes(notes: INote[]) {
        this.notes = notes
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async fetchNotes() {
        try {
            const res = await axiosInstance.get<INote[]>("/notes")
            this.setNotes(res.data)
        } catch (e) {
            console.error("fetchClients", e)
        }
    }
}

export const noteStore = new NoteStore();