import {makeAutoObservable} from "mobx";
import {IUser} from "../data/IUser";

class UserStore {
    clients: IUser[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

export const userStore = new UserStore();