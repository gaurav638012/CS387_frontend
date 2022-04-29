import { Address } from "./address";
import { genUser } from "./genUser";

export class Customer implements genUser{
    user_id: number;
    username: string;
    password: string;
    role: string;
    valid: boolean;
    
    customer_id : number;
    mobile_no: number;
    email: string;
    subscription: boolean;

    addresses: Address[];
} 