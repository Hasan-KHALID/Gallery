import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { GalleryService } from "../gallery.service";
import { Image } from "../image.module";

@Component({
    selector: 'app-gallery-view',
    templateUrl: './gallery-view.component.html'
    
    
})
export class GalleryView implements OnInit{
    image!: Image[];
    fullScreenMode = false;
    @Output()fullScree = new EventEmitter<boolean>();

     viewFullScreen(){

        
     }

    
   
    
    

    constructor(private galleryService: GalleryService, private router:Router){}


    ngOnInit() {
        this.image = this.galleryService.images;

        console.log(this.image)
        
    }

    onLoad(){
        
        this.fullScreenMode = true;
    }
    

    




}