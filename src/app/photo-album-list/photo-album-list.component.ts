import { Component, OnInit } from '@angular/core';
import { AlbumListService, Album } from './../album-list.service';
import { PhotoAlbumListItemComponent } from './../photo-album-list-item/photo-album-list-item.component';

@Component({
  selector: 'app-photo-album-list',
  templateUrl: './photo-album-list.component.html',
  styleUrls: ['./photo-album-list.component.css']
})
export class PhotoAlbumListComponent implements OnInit {

  albums: Album[];

  constructor(private albumListService: AlbumListService) { }

  ngOnInit(){
    this.albumListService.getList().subscribe(res => {
      this.albums = res;
    });
  }

}
