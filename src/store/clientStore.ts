import {makeAutoObservable} from "mobx";
import axiosInstance from "http/axios";
import {IClient} from "data/IClient";

export type IClientStore = IClient & { checked: boolean }

class ClientStore {
    clients: IClientStore[] = [];

    isPickUp: boolean = false;

    filterString: string = "";

    activeClientId: string = "";

    get activeClient() {
        return this.clients.find(item => item.id === this.activeClientId)
    }

    setActiveClientId(activeClientId: string) {
        this.activeClientId = activeClientId
    }

    get filteredClients() {
        return this.clients.filter(item =>
            this.filterString.length >= 2 ? item.name.toLowerCase().includes(this.filterString.toLowerCase()) : true
        )
    }

    get checkedClientsCount() {
        return this.clients.reduce((a, b) => a + (b.checked ? 1 : 0), 0)
    }

    setIsPickUp(isPickUp: boolean) {
        if (!isPickUp) this.clients = this.clients.map(item => ({...item, checked: false}))
        this.isPickUp = isPickUp
    }

    setClientChecked(id: string, checked: boolean) {
        this.clients = this.clients.map(item => item.id === id ? {...item, checked} : item)
    }

    setAllClientsChecked(checked: boolean) {
        if (checked) {
            const checkedClientsDict: { [key: string]: boolean } = {}
            this.filteredClients.forEach(item => checkedClientsDict[item.id] = true)
            this.clients = this.clients.map(item => (checkedClientsDict[item.id] ? {...item, checked} : {
                ...item,
                checked: false
            }))
            console.log(checkedClientsDict)
        } else {
            this.clients = this.clients.map(item => ({...item, checked}))
        }
    }

    setClients(clients: IClientStore[]) {
        this.clients = clients
    }

    setFilterString(filterString: string) {
        this.filterString = filterString
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