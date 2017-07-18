import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor() { }

  getDetails(id: number) {
    return Observable.of(1);
  }

  updateDetails() {

  }
}
