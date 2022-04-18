import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourentsComponent } from './restourents.component';

describe('RestourentsComponent', () => {
  let component: RestourentsComponent;
  let fixture: ComponentFixture<RestourentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestourentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestourentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
