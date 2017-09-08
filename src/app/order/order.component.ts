import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Orders } from './order';
import { orderServiceProvider } from '../factory/product.service.provider';
import { OrderService } from '../services/order/order.service';
import { MdDialog } from '@angular/material';
import { EditComponent } from './edit/edit.component';

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
    private router: Router, private dialog: MdDialog) { }

  ngOnInit() {
    // this.route.data.subscribe((data: { orders: Orders[] }) => {
    //   this.orders = data.orders;
    // });
    this._orderService.getAllOrders().subscribe(data => this.orders = data);
  }

  openPupUp(order: Orders) {
    let dialogRef = this.dialog.open(EditComponent, {
      data: {
        order
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      console.log(result);
      // this.title = result;
    });
  }
}
