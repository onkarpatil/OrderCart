import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Orders } from '../order';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  order: Orders;
  constructor(public dialogRef: MdDialogRef<EditComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.order = <Orders>this.data.order;
    console.log(this.order);
  }

}
