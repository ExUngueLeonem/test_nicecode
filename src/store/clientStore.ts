import {makeAutoObservable} from "mobx";
import axiosInstance from "http/axios";
import {IClient} from "data/IClient";

class ClientStore {
    clients: IClient[] = []

    setClients(clients: IClient[]) {
        this.clients = clients
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async fetchClients() {
        try {
            const res = await axiosInstance.get<IClient[]>("/clients")
            this.setClients(res.data)
        } catch (e) {
            console.error("fetchClients", e)
        }
    }
}

export const clientStore = new ClientStore();