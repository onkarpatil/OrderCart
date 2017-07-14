import { Injectable } from '@angular/core';
import { Orders } from '../../order/order';
import { OrderDetails } from '../../order/order.details';

@Injectable()
export class OrderService {
  orders: Orders[];
  orderDetails: OrderDetails[];
  constructor() { }

  getAllOrders(customerId: number) {
    return this.orders;
  }

  getOrderDetails(orderId: number) {
    return this.orderDetails;
  }


}
