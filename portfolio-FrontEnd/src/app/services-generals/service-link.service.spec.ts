import { TestBed } from '@angular/core/testing';

import { ServiceLinkService } from './service-link.service';

describe('ServiceLinkService', () => {
  let service: ServiceLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
