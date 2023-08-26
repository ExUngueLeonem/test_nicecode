import {makeAutoObservable} from "mobx";
import {IClients} from "../data/IClients";

class ClientStore {
    clients: IClients[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

export const clientStore = new ClientStore();