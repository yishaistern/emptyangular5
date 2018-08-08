import { TestBed, inject } from '@angular/core/testing';

import { SynagogueService } from './synagogue.service';

describe('SynagogueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynagogueService]
    });
  });

  it('should be created', inject([SynagogueService], (service: SynagogueService) => {
    expect(service).toBeTruthy();
  }));
});
