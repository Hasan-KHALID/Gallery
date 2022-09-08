import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GalleryService } from "../gallery.service";
import { Image } from "../image.module";

@Component({
    selector: 'app-gallery-view',
    templateUrl: './gallery-view.component.html'
    
    
})
export class GalleryView implements OnInit{
    image!: Image[];
   
    
    

    constructor(private galleryService: GalleryService, private router:Router){}


    ngOnInit() {
        this.image = this.galleryService.images;

        console.log(this.image)
        
    }

    onLoad(url:string, name:string ){
        const imageUrl = url;
        const imageName= name;
        this.galleryService.fullScreen(imageUrl, imageName);
        console.log(imageName)
        console.log(imageUrl)

        this.router.navigate(['/fullscreen']);
    }
    

    




}