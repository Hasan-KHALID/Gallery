import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-view-fullScreen',
    templateUrl: './view-fullScreen.html'
    
    
})
export class ViewFullScreen{
    @Input() imagePath = "";
    @Output()fullScreenMode = new EventEmitter<boolean>();


}