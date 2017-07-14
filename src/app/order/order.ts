import { OrderDetails } from './order.details'

export class Orders {
    orderId: number;
    orderNumber: string;
    customerId: number;
    orderDate: Date;
    amount: number;
    details: OrderDetails[];
}