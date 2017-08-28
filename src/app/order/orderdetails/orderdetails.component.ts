import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  orderId: any;
  constructor(private _router: Router, private _route: ActivatedRoute
    , private _totastr: ToastsManager, private _viewRef: ViewContainerRef) {

    this._totastr.setRootViewContainerRef(_viewRef);
  }

  ngOnInit() {
    this._totastr.success('Order Details Loaded!', 'Success!', { dismiss: 'click' });
    this._route.params.subscribe((data) => this.orderId = data['id']);
  }

}
