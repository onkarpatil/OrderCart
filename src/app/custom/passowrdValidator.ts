import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export function ValidatePassword(control: AbstractControl) {
    if (control.value.length <= 4 || control.value.length >= 15) {
        return Observable.of({ validPassword: false });
    }
    return Observable.of(null);
}
