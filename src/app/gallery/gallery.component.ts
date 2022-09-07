import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  providers: [GalleryService]
  
  
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
