import { Component } from "@angular/core"
import { Router } from "@angular/router";
@Component({
    selector: "app-landing",
    templateUrl: "./landing.component.html"
})

export class LandingComponent{

    constructor(private router: Router){

    }


    onLoading(){
        this.router.navigate(['/login'])
    }
    

}