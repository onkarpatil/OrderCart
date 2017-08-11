import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { OrderService } from './order.service';
import { Orders } from '../../order/order';
import { OrderDetails } from '../../order/order.details';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderDetailResolver implements Resolve<Orders[]> {
    constructor(private orderService: OrderService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Orders[]> {
        return this.orderService.getAllOrders();
    }
}

