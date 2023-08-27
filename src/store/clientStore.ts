import {makeAutoObservable} from "mobx";
import axiosInstance from "http/axios";
import {IClient} from "data/IClient";

export type IClientStore = IClient & { checked: boolean }

class ClientStore {
    clients: IClientStore[] = [];

    isPickUp: boolean = false;

    get checkedClientsCount() {
        return this.clients.reduce((a, b) => a + (b.checked ? 1 : 0), 0)
    }

    setIsPickUp(isPickUp: boolean) {
        if (!isPickUp) this.clients = this.clients.map( item => ({...item, checked: false}))
        this.isPickUp = isPickUp
    }

    setClientChecked(id: string, checked: boolean) {
        this.clients = this.clients.map( item => item.id === id ? {...item, checked } : item)
    }

    setAllClientsChecked(checked: boolean) {
        this.clients = this.clients.map(item => ({...item, checked}))
    }

    setClients(clients: IClientStore[]) {
        this.clients = clients
    }

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    async fetchClients() {
        try {
            const res = await axiosInstance.get<IClient[]>("/clients")
            const mutatedData = res.data.map(item => ({...item, checked: false}));
            this.setClients(mutatedData)
        } catch (e) {
            console.error("fetchClients", e)
        }
    }
}

export const clientStore = new ClientStore();