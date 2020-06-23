import { Component, OnInit, Input } from '@angular/core';
import { AlbumPhoto } from '../album-list.service';

@Component({
  selector: 'app-photo-album-list-item-photo',
  templateUrl: './photo-album-list-item-photo.component.html',
  styleUrls: ['./photo-album-list-item-photo.component.css']
})
export class PhotoAlbumListItemPhotoComponent implements OnInit {

  @Input()
  photo:AlbumPhoto;

  constructor() { }

  ngOnInit(): void {
  }

}
