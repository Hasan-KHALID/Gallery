import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landingPage/landing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryEdit } from './gallery/gallery-edit/gallery-edit.component';
import { GalleryView } from './gallery/gallery-view/gallery-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingComponent,
    GalleryComponent,
    GalleryEdit,
    GalleryView
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
