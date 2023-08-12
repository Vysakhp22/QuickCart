import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { AuthService } from '../auth.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
    });

    constructor(private router: Router,
        private myService: MyServiceService,
        private authService : AuthService) { }

    public get f() {
        return this.loginForm.controls;
    }

    ngOnInit(): void {
    }

    public onSubmit() {
        if (!this.loginForm.valid) return;
        this.myService.checkAdmin().then((response: any) => {
            const data = response;
            console.log(data);

            if (data.userame === this.loginForm.value.email && data.password === this.loginForm.value.password) {
                this.authService.logIn();
                this.router.navigate(['/dashboard']);
            } else {
                alert('Invalid username or password');
            }

        });


    }
}