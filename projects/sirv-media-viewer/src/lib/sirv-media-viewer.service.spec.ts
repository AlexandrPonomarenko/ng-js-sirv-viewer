import { TestBed } from '@angular/core/testing';

import { SirvMediaViewerService } from './sirv-media-viewer.service';

describe('SirvMediaViewerService', () => {
  let service: SirvMediaViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SirvMediaViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
