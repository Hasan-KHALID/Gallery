import { Component } from "@angular/core";
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html"
})
export class AuthComponent{
    email!:string;
    password!: string;
    name!:string
    isLogin = true;

    constructor(private router: Router){}


    onSubmit(form: NgForm){
        console.log(form.value)
        this.email = form.value.email;
        this.password = form.value.password;
        this.name = form.value.name; 
        this.router.navigate(['/gallery'])
    }

    onPress(){
        this.isLogin = !this.isLogin;
    }



}