import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumListItemComponent } from './photo-album-list-item.component';

describe('PhotoAlbumListItemComponent', () => {
  let component: PhotoAlbumListItemComponent;
  let fixture: ComponentFixture<PhotoAlbumListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
