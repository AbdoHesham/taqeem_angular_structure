/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoEvaluationService } from './info-evaluation.service';

describe('Service: InfoEvaluation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoEvaluationService]
    });
  });

  it('should ...', inject([InfoEvaluationService], (service: InfoEvaluationService) => {
    expect(service).toBeTruthy();
  }));
});
