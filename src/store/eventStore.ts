import {makeAutoObservable} from "mobx";
import axiosInstance from "http/axios";
import {IEvent} from "data/IEvent";

class EventStore {
    events: IEvent[] = []

    setEvents(events: IEvent[]) {
        this.events = events
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async fetchEvents() {
        try {
            const res = await axiosInstance.get<IEvent[]>("/events")
            this.setEvents(res.data)
        } catch (e) {
            console.error("fetchClients", e)
        }
    }
}

export const eventStore = new EventStore();