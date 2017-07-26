import { Injectable } from '@angular/core';
import { Orders } from '../../order/order';
import { OrderDetails } from '../../order/order.details';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderService {
  orders: Orders[] = [{
    amount: 100,
    customerId: 1,
    orderDate: new Date('10-Nov-2016'),
    details: [],
    orderId: 1,
    orderNumber: '001-ABC'
  }];
  orderDetails: OrderDetails[];
  constructor(private isAuthorized: boolean) { }

  getAllOrders() {
    console.log(this.isAuthorized);
    return Observable.of(this.orders);
  }

  getOrderByCustomerId(customerId: number) {
    return Observable.of(this.orders.filter(data => data.customerId === customerId));
  }

  getOrderDetails(orderId: number) {
    return this.orderDetails;
  }


}
