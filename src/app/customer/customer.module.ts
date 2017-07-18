import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from './customer.component';
import { OrderComponent } from '../order/order.component';
import { CustomerdetailsComponent } from './detail/customerdetails.component';
import { CustomerService } from '../services/customer/customer.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CustomerComponent },
            { path: ':id/order', component: OrderComponent }
        ])
    ],
    declarations: [
        CustomerComponent,
        OrderComponent,
        CustomerdetailsComponent
    ],
    providers: [CustomerService]
})
export class CustomerModule { }
