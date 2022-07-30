import { TestBed } from '@angular/core/testing';

import { VcsService } from './vcs.service';

describe('VcsService', () => {
  let service: VcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
