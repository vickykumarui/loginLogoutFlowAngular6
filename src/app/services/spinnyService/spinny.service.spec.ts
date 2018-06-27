import { TestBed, inject } from '@angular/core/testing';

import { SpinnyService } from './spinny.service';

describe('SpinnyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnyService]
    });
  });

  it('should be created', inject([SpinnyService], (service: SpinnyService) => {
    expect(service).toBeTruthy();
  }));
});
