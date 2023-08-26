export interface IConsultation {
    id: string;
    date: string;
    text: string;
    images: string;
    type: "Online консультация" | "Личный прием";
    "status": "confirmed" | "not confirmed";
}