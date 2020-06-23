import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumListItemPhotoComponent } from './photo-album-list-item-photo.component';

describe('PhotoAlbumListItemPhotoComponent', () => {
  let component: PhotoAlbumListItemPhotoComponent;
  let fixture: ComponentFixture<PhotoAlbumListItemPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumListItemPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumListItemPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
