import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestourentComponent } from './list-restourent.component';

describe('ListRestourentComponent', () => {
  let component: ListRestourentComponent;
  let fixture: ComponentFixture<ListRestourentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestourentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestourentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
