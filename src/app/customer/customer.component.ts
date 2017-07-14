import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private _upper: UpperCasePipe, private _fb: FormBuilder) { }



  ngOnInit() {
    this.customerForm = this._fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this._fb.array([this.buildForm()]),
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['',Validators.required]
    });
  }

  buildForm() {
    return this._fb.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      addressLine3: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]

    });
  }

  addAddress() {
    let addressControl = <FormArray>this.customerForm.controls['address'];
    addressControl.push(this.buildForm());
  }

  removeAddress(i: number) {
    let addressControl = <FormArray>this.customerForm.controls['address'];
    addressControl.removeAt(i);
  }



}
