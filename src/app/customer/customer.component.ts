import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name: string = 'test';
  constructor(private _upper: UpperCasePipe) { }

  ngOnInit() {
    this.name = this._upper.transform(this.name);
  }

}
