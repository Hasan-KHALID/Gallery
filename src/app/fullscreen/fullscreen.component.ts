import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery/gallery.service';
import { Image } from '../gallery/image.module';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent implements OnInit{
  image!: Image[];
  imageName!:string;
  imagePath!: string

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.image = this.galleryService.images;
    this.imageName = this.galleryService.names
    this.imagePath = this.galleryService.imageUrl

    console.log(this.imageName)

  }

}
