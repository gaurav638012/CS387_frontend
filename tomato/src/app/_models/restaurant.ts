import { genUser } from "./genUser";

export class Restaurant implements genUser {
    user_id: number;
    username: string;
    password: string;
    role: string;
    valid: boolean;
    
    restaurant_id: number;
    restaurant_name: number;
    mobile_no: number;
    email: string;
    overall_discount: number;
    max_safety_follow: boolean
    open_time: string;
    close_time: string;
    avg_cost_for_two: number;
    latitude: number
    longitude: number;
}