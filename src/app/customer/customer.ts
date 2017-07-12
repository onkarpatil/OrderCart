import { Address } from  '../common/address'

export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    address: Address[]
    email: string;
    mobile: number;
    dob: Date;
}