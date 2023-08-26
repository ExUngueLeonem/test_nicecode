import {makeAutoObservable} from "mobx";
import axiosInstance from "http/axios";
import {IClients} from "data/IClients";

class ClientStore {
    clients: IClients[] = []

    setClients(clients: IClients[]) {
        this.clients = clients
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async fetchClients() {
        try {
            const res = await axiosInstance.get<IClients[]>("/clients")
            this.setClients(res.data)
        } catch (e) {
            console.error("fetchClients", e)
        }
    }
}

export const clientStore = new ClientStore();