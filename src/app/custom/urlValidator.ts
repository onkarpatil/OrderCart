import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export function ValidateUrl(control: AbstractControl) {
    if (!control.value.startsWith('https') || !(control.value.includes('.io'))) {
        return Observable.of({ validUrl: true });
    }
    return Observable.of(null);
}
