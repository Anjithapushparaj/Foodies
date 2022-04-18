import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestourentComponent } from './add-restourent.component';

describe('AddRestourentComponent', () => {
  let component: AddRestourentComponent;
  let fixture: ComponentFixture<AddRestourentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestourentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestourentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
