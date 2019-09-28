import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignUpService } from "./signup.service";

@Injectable()

export class UserNotTakenValidatorService {
    constructor(
        private signUpService: SignUpService
    ){ }

    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(
                    debounceTime(300),
                    switchMap(userName => {
                        return this.signUpService.checkUserNameTaken(userName)
                    }),
                    map(isTaken => isTaken ? { userNameTaken: true } : null),
                    first()
                );
        }
    }
}