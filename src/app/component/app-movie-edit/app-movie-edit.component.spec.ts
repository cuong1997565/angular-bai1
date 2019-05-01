import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieEditComponent } from './app-movie-edit.component';

describe('AppMovieEditComponent', () => {
  let component: AppMovieEditComponent;
  let fixture: ComponentFixture<AppMovieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMovieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
