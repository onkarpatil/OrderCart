import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Orders } from './order';
import { orderServiceProvider } from '../factory/product.service.provider';
import { OrderService } from '../services/order/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [orderServiceProvider]
})
export class OrderComponent implements OnInit {
  @Input() customerId: number;
  orders: Orders[];
  constructor(private _orderService: OrderService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.route.data.subscribe((data: { orders: Orders[] }) => {
    //   this.orders = data.orders;
    // });
    this._orderService.getAllOrders().subscribe(data => this.orders = data);
  }
}
