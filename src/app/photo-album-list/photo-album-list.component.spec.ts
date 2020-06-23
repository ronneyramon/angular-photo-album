import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumListComponent } from './photo-album-list.component';

describe('PhotoAlbumListComponent', () => {
  let component: PhotoAlbumListComponent;
  let fixture: ComponentFixture<PhotoAlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
