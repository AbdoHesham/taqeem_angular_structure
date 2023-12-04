/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndividualsPortalService } from './individuals-portal.service';

describe('Service: IndividualsPortal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualsPortalService]
    });
  });

  it('should ...', inject([IndividualsPortalService], (service: IndividualsPortalService) => {
    expect(service).toBeTruthy();
  }));
});
