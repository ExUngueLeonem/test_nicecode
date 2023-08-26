import {makeAutoObservable} from "mobx";
import {IConsultation} from "../data/IConsultation";

class ConsultationStore {
    clients: IConsultation[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

export const consultationStore = new ConsultationStore();