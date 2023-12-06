import { Component, OnInit } from '@angular/core';
import { InfoEvaluationComponent } from './info-evaluation/info-evaluation.component';
import { InfoEvaluationService } from '../../services/info-evaluation.service';
import { CommonModule } from '@angular/common';
import { InfoDepartementComponent } from './info-departement/info-departement.component';
import { TitleFormComponent } from '../../../../shared/components/forms/title-form/title-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { InfoCompanyComponent } from './info-company/info-company.component';

@Component({
  selector: 'app-add-evaluation-request-departement',
  templateUrl: './add-evaluation-request-departement.component.html',
  styleUrls: ['./add-evaluation-request-departement.component.scss'],
  standalone: true,
  imports: [
    InfoEvaluationComponent,
    CommonModule,
    InfoDepartementComponent,
    TitleFormComponent,
    TranslateModule,
    InfoCompanyComponent,
  ],
})
export class AddEvaluationRequestDepartementComponent implements OnInit {
  products: any[] = [];

  constructor(private infoEvaluationService: InfoEvaluationService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.infoEvaluationService.getAllProducts().subscribe(
      (response: any[]) => {
        this.products = response;
      },
      (error: Error) => {}
    );
  }
}
