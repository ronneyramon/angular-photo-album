import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoAlbumListComponent } from './photo-album-list/photo-album-list.component';
import { PhotoAlbumListItemComponent } from './photo-album-list-item/photo-album-list-item.component';
import { PhotoAlbumListItemPhotoComponent } from './photo-album-list-item-photo/photo-album-list-item-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoAlbumListComponent,
    PhotoAlbumListItemComponent,
    PhotoAlbumListItemPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
