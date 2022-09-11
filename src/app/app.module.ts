import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landingPage/landing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryEdit } from './gallery/gallery-edit/gallery-edit.component';
import { GalleryView } from './gallery/gallery-view/gallery-view.component';
import { Routes, RouterModule } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { GalleryService } from './gallery/gallery.service';
import { ViewFullScreen } from './gallery/gallery-view/view-fullScreen/view-fullScreen';

const appRouters: Routes =[
  { path:'', component: LandingComponent },
  { path:'gallery', component: GalleryComponent },
  { path:'login', component: AuthComponent },
  { path:'fullscreen', component: FullscreenComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingComponent,
    GalleryComponent,
    GalleryEdit,
    GalleryView,
    HeadingComponent,
    FullscreenComponent,
    ViewFullScreen
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [Image,GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
