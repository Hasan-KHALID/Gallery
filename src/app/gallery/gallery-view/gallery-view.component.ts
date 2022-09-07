import { Component, OnInit } from "@angular/core";
import { GalleryService } from "../gallery.service";
import { Image } from "../image.module";

@Component({
    selector: 'app-gallery-view',
    templateUrl: './gallery-view.component.html'
    
    
})
export class GalleryView implements OnInit{
    image!: Image[]

    
    

    constructor(private galleryService: GalleryService){}


    ngOnInit() {
        this.image = this.galleryService.images;

        console.log(this.image)
        
    }

    




}