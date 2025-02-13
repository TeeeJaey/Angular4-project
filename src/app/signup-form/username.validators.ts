import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';

export class UsernameValidators
{
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >= 0)
        {
            return { cannotContainSpace: true}
        }

    }
    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve,reject) =>
        {
            setTimeout(()=> {
                if(control.value == 'abc@xyz.com')
                    resolve({shouldBeUnique: true});
                else 
                    resolve(null);
            },2000);
        });
    }
}