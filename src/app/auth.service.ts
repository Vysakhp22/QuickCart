import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn: boolean = false;
    constructor() { }

    public logIn() {
        this.isLoggedIn = true;
    }

    public logout() {
        this.isLoggedIn = false;
    }

    public isAuthenticated() {
        return this.isLoggedIn;
    }

}