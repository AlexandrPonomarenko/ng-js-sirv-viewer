import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsOptionsComponent } from './slots-options.component';

describe('SlotsOptionsComponent', () => {
  let component: SlotsOptionsComponent;
  let fixture: ComponentFixture<SlotsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
