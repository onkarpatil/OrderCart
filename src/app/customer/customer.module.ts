import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from './customer.component';
import { OrderComponent } from '../order/order.component';
import { CustomerdetailsComponent } from './detail/customerdetails.component';
import { CustomerService } from '../services/customer/customer.service';
import { OrderDetailResolver } from '../services/order/order-details-resolver.service';
import { OrderdetailsComponent } from '../order/orderdetails/orderdetails.component';
import { EditComponent } from '../order/edit/edit.component';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CustomerComponent },
            {
                path: ':id/order', component: OrderComponent,
                children: [{
                    path: ':id',
                    component: OrderdetailsComponent
                }]
            }
        ])
    ],
    declarations: [
        CustomerComponent,
        OrderComponent,
        CustomerdetailsComponent,
        OrderdetailsComponent,
        EditComponent
    ],
    entryComponents: [EditComponent],
    providers: [OrderDetailResolver, CustomerService]
})
export class CustomerModule { }
