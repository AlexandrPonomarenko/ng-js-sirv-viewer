import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirvMediaViewerComponent } from './sirv-media-viewer.component';

describe('SirvMediaViewerComponent', () => {
  let component: SirvMediaViewerComponent;
  let fixture: ComponentFixture<SirvMediaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirvMediaViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SirvMediaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
