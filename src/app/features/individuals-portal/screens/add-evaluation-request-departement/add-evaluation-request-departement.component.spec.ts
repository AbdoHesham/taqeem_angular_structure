/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddEvaluationRequestDepartementComponent } from './add-evaluation-request-departement.component';

describe('AddEvaluationRequestDepartementComponent', () => {
  let component: AddEvaluationRequestDepartementComponent;
  let fixture: ComponentFixture<AddEvaluationRequestDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEvaluationRequestDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEvaluationRequestDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
