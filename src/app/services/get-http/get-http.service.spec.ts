import { TestBed, inject } from '@angular/core/testing';

import { GetHttpService } from './get-http.service';

describe('GetHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHttpService]
    });
  });

  it('should be created', inject([GetHttpService], (service: GetHttpService) => {
    expect(service).toBeTruthy();
  }));
});
