export interface IClient {
    id: string;
    name: string;
    age: number;
    sex: "male" | "female";
    "status": "warning" | "message" | "ok";
    image: string;
}