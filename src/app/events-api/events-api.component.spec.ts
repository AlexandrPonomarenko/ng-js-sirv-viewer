import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsApiComponent } from './events-api.component';

describe('EventsApiComponent', () => {
  let component: EventsApiComponent;
  let fixture: ComponentFixture<EventsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
