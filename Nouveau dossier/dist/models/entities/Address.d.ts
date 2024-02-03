import { AddressTypes } from '../enums/AddressTypes';
export declare class Address {
    id: number;
    street: string;
    city: string;
    country: string;
    postalCode: number;
    type: AddressTypes;
}
