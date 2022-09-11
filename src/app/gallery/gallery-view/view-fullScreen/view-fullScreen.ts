import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-view-fullScreen',
    templateUrl: './view-fullScreen.html'
    
    
})
export class ViewFullScreen{
    @Input() imagePath = "";
    

}