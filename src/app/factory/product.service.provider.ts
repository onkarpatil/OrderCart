import { OrderService } from '../services/order/order.service';
import { LoginService } from '../services/login/login.service';

const orderServiceFactory = (loginService: LoginService) => {
    return new OrderService(loginService.isLoggedin);
};


export let orderServiceProvider = {
    provide: OrderService,
    useFactory: orderServiceFactory,
    deps: [LoginService]
};
