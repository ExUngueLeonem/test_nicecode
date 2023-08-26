import {makeAutoObservable} from "mobx";
import axiosInstance from "http/axios";
import {IConsultation} from "data/IConsultation";

class ConsultationStore {
    consultations: IConsultation[] = []

    setConsultations(consultations: IConsultation[]) {
        this.consultations = consultations
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async fetchConsultations() {
        try {
            const res = await axiosInstance.get<IConsultation[]>("/consultations")
            this.setConsultations(res.data)
        } catch (e) {
            console.error("fetchClients", e)
        }
    }
}

export const consultationStore = new ConsultationStore();