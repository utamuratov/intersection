import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntersectionComponent } from './ngx-intersection.component';

describe('NgxIntersectionComponent', () => {
  let component: NgxIntersectionComponent;
  let fixture: ComponentFixture<NgxIntersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIntersectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxIntersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
