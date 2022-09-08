import { Injectable, OnInit } from "@angular/core"
import { Image } from "./image.module"

@Injectable()
export class GalleryService implements OnInit{
    imageUrl !:string;
    names !:string ;

     images: Image[] =[
        {
            name: "Photo1",
            imageUrl: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
            details: "only for testing"

        }
    ]


    addImage(name:string, imageUrl:string, details:string){
        this.images.push({name:name, imageUrl:imageUrl, details:details})
    }

    ngOnInit(): void {
        
    }

    fullScreen(url: string, name: string){
        let imgUrl: String;
        let names : string; 
        imgUrl = url;
        names =name;
        console.log(this.names)

    }

}