import { TestBed } from '@angular/core/testing';

import { CourseRegSrvcService } from './course-reg-srvc.service';

describe('CourseRegSrvcService', () => {
  let service: CourseRegSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseRegSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
