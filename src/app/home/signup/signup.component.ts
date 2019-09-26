import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { lowerCaseValidator } from "src/app/shared/validators/lower-case.validator";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { NewUser } from "./new-user.model";
import { SignUpService } from "./signup.service";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Component({
    templateUrl: './signup.component.html'
})

export class SignUpComponent implements OnInit {
    signupForm: FormGroup

    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signupService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) {

    }

    ngOnInit() {

        this.platformDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus();

        this.signupForm = this.formBuilder.group({
            userName: ['', [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            fullName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]]
        });
    }


    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService.signup(newUser).subscribe(() => this.router.navigate(['']));
    }
}