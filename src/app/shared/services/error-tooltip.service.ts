import { LocalizationService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorTooltipService {
  constructor(private localizationService: LocalizationService) {}
  GetErrortooltip(Input, ctrlLabel = 'Field', minValue?, maxValue?) {
    let tooltip = '';

    if (Input?.errors && Input?.touched) {
      if (Input.errors.required)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::is required')} \n`;

      if (Input.errors.maxlength)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Exceed max Length')}\n`;
      if (Input.errors.minlength)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::less than min')}\n`;
      if (Input.errors.min && minValue == null)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::less than min')}\n`;

      if (Input.errors.min && minValue != null)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::Minimum  is'
        )}   ${minValue}  \n`;

      if (Input.errors.max && maxValue != null)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum')}  ${maxValue}  \n`;

      if (Input.errors.pattern)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Invalid Format')}  \n`;

      if (Input.errors.email)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Not in Email Format')}  \n`;

      if (Input.errors.maxFileSize)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum 5 MB')}  \n`;
      if (Input.errors.maxFileSize1M)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum 1 MB')}  \n`;
      if (Input.errors.maxFileSize3M)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum 3 MB')}  \n`;

      if (Input.errors.ageRange)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::accept ages between 22 and 100'
        )}    \n`;
      if (Input.errors.extentionError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Invalid Extension')}   \n`;

      if (Input.errors.lessThanStartOrignError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::should be greater than Original Start date'
        )}  \n`;
      if (Input.errors.lessThanOrignError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::should be greater than Original Schedule End date'
        )}  \n`;
      if (Input.errors.greaterThanOrignError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::should be less than Original Schedule End date'
        )}  \n`;

      if (Input.errors.duplicated) {
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::' + 'Already exists for this provider'
        )}    \n`;
      }

      if (Input.errors.GpsErrorMsg) {
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::GpsErrorMsg')}  \n`;
      }
    }

    return tooltip;
  }
  GetTempErrortooltip(Input:any, ctrlLabel = 'Field', minValue:any, maxValue:any) {
    let tooltip = '';

    if (Input?.errors) {
      if (Input.errors.required)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::is required')} \n`;

      if (Input.errors.maxlength)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Exceed max Length')}\n`;
      if (Input.errors.minlength)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::less than min')}\n`;
      if (Input.errors.min && minValue == null)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::less than min')}\n`;

      if (Input.errors.min && minValue != null)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::Minimum  is'
        )}   ${minValue}  \n`;

      if (Input.errors.max && maxValue != null)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum')}  ${maxValue}  \n`;

      if (Input.errors.pattern)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Invalid Format')}  \n`;

      if (Input.errors.email)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Not in Email Format')}  \n`;

      if (Input.errors.maxFileSize)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum 5 MB')}  \n`;
      if (Input.errors.maxFileSize1M)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum 1 MB')}  \n`;
      if (Input.errors.maxFileSize3M)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Maximum 3 MB')}  \n`;

      if (Input.errors.ageRange)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::accept ages between 22 and 100'
        )}    \n`;
      if (Input.errors.extentionError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::Invalid Extension')}   \n`;

      if (Input.errors.lessThanStartOrignError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::should be greater than Original Start date'
        )}  \n`;
      if (Input.errors.lessThanOrignError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::should be greater than Original Schedule End date'
        )}  \n`;
      if (Input.errors.greaterThanOrignError)
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::should be less than Original Schedule End date'
        )}  \n`;

      if (Input.errors.duplicated) {
        tooltip += `${ctrlLabel} ${this.localizationService.instant(
          '::' + 'Already exists for this provider'
        )}    \n`;
      }

      if (Input.errors.GpsErrorMsg) {
        tooltip += `${ctrlLabel} ${this.localizationService.instant('::GpsErrorMsg')}  \n`;
      }
    }

    return tooltip;
  }
}
