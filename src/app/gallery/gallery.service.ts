import { Injectable } from "@angular/core"

@Injectable()
export class GalleryService{
     images =[
        {
            name: "Photo1",
            imageUrl: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
            details: "only for testing"

        }
    ]


    addImage(name:string, imageUrl:string, details:string){
        this.images.push({name:name, imageUrl:imageUrl, details:details})
    }

}