import { InjectionToken } from '@angular/core'
import { AppConfig } from './Iapp.config';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');


export const DI_CONFIG: AppConfig = {
    apiEndPoint: 'https://jsonplaceholder.typicode.com/posts',
    title: 'Test API'
};



