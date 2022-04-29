import { Address } from "./address";
import { genUser } from "./genUser";

export class Customer implements genUser{
    user_id: number;
    username: string;
    password: string;
    role: string;
    valid: boolean;
    
    mobile: number;
    email: string;
    subscription: boolean;

    addresses: Address[];
} 

export class CustomerInput{
    username: string;
    password: string;
    mobile: number;
    email: string;
    addresses: Address[];
} 