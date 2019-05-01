import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieListComponent } from './app-movie-list.component';

describe('AppMovieListComponent', () => {
  let component: AppMovieListComponent;
  let fixture: ComponentFixture<AppMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
