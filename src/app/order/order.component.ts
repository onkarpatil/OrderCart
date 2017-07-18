import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { Orders } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
  @Input() customerId: number;
  orders: Orders[];
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this._orderService.getAllOrders(1).subscribe(data => this.orders = data);
  }


}
