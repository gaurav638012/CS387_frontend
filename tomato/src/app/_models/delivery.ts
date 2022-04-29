import { genUser } from "./genUser";

export class Delivery implements genUser {
    user_id: number;
    username: string;
    password: string;
    role: string;
    valid: boolean;

    delivery_id: number;
    mobile_no: number;
    email: string;
    available: boolean;
    vaccination_status: string;
}

export class DeliveryInput {
    username: string;
    password: string;

    mobile: number;
    email: string;
    vaccination_status: string;
}
