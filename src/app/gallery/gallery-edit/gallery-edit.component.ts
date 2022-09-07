import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { GalleryService } from "../gallery.service";
import { Image } from "../image.module";

@Component({
    selector: 'app-gallery-edit',
    templateUrl: './gallery-edit.component.html'
})
export class GalleryEdit implements OnInit{
    editForm!: FormGroup;
    image!: Image[]
    imageName!:string;
    imageUrl!: string;
    details!: string
    constructor(private galleryService: GalleryService){}

    ngOnInit(): void {
        
        this.editForm = new FormGroup({
            'imageName': new FormControl(null,),
            'imageLink': new FormControl(null,),
            'details': new FormControl(null,)
        })

    }


    onSubmit(){
        console.log(this.editForm.value) 
        this.imageName = this.editForm.value.imageName;
        this.imageUrl = this.editForm.value.imageLink;
        this.details = this.editForm.value.details
        this.galleryService.addImage(this.imageName, this.imageUrl, this.details)
        

    }

}