import {makeAutoObservable} from "mobx";
import {IEvent} from "../data/IEvent";

class EventStore {
    clients: IEvent[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

export const eventStore = new EventStore();