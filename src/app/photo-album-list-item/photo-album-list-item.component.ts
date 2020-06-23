import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album-list.service';
import { } from './../photo-album-list-item-photo/photo-album-list-item-photo.component'

@Component({
  selector: 'app-photo-album-list-item',
  templateUrl: './photo-album-list-item.component.html',
  styleUrls: ['./photo-album-list-item.component.css']
})
export class PhotoAlbumListItemComponent implements OnInit {

  @Input()
  album: Album;

  @Input()
  index:number;

  constructor() { }

  ngOnInit(): void {
  }

}
