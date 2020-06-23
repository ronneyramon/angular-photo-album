import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {mergeMap, map, toArray,take} from 'rxjs/operators';
import { groupBy } from 'rxjs/internal/operators/groupBy';

interface AlbumItem {
  albumId:number,
  id:number,
  title:string,
  url:string,
  thumbnailUrl:string
}

export interface Album {
  id:number,
  photos:AlbumPhoto[]
}
export interface AlbumPhoto{
  albumId:number,
  id:number,
  title:string,
  url:string,
  thumbnailUrl:string
}

@Injectable({
  providedIn: 'root'
})

export class AlbumListService {

  constructor(private http: HttpClient) { }

  

  getList() {
   

    return this.http.get<AlbumItem[]>('https://jsonplaceholder.typicode.com/photos')
    .pipe(
      mergeMap(res => res), 
      groupBy(p => p.albumId),      
      mergeMap(group =>
        group.pipe(          
          map(a => a as AlbumPhoto),
          toArray(),          
          map(a => ({id:group.key, photos: a.sort((a,b) => b.id - a.id)} as Album))
          )
      ),
      toArray(),
      map(arr => arr.sort((a,b) => b.id - a.id))      
      );
    
  }
}