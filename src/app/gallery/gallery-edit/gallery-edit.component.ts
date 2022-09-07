import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-gallery-edit',
    templateUrl: './gallery-edit.component.html'
})
export class GalleryEdit implements OnInit{
    editForm!: FormGroup;

    ngOnInit(): void {
        this.editForm = new FormGroup(
            {
                'imageName': new FormControl(null),
                'imageLink': new FormControl(null),
                'details': new FormControl(null)
            }
        )
    }

}