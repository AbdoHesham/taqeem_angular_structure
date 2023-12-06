import { Component, OnInit } from '@angular/core';
import { AddEvaluationRequestDepartementComponent } from './screens/add-evaluation-request-departement/add-evaluation-request-departement.component';
import { HorizontalHeaderComponent } from '../../shared/components/layouts/horizontal-header/horizontal-header.component';
import { HorizontalFooterComponent } from '../../shared/components/layouts/horizontal-footer/horizontal-footer.component';

@Component({
  selector: 'app-individuals-portal',
  templateUrl: './individuals-portal.component.html',
  styleUrls: ['./individuals-portal.component.scss'],
  standalone: true,
  imports: [AddEvaluationRequestDepartementComponent, HorizontalHeaderComponent, HorizontalFooterComponent],
})
export class IndividualsPortalComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
