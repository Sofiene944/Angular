import { TestBed } from '@angular/core/testing';

import { FileinfoService } from './fileinfo.service';

describe('FileinfoService', () => {
  let service: FileinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
