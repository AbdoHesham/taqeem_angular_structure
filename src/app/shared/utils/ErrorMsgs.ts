export function GetErrortooltip(Input, ctrlLabel = 'Field') {
    let tooltip = '';
    if (Input?.errors && Input?.touched) {
      if (Input.errors.required) tooltip += `${ctrlLabel} is required \n`;

      if (Input.errors.maxlength) tooltip += `${ctrlLabel} Exceed max Length \n`;

      if (Input.errors.pattern) tooltip += `${ctrlLabel} Invalid Format \n`;

      if (Input.errors.email) tooltip += `${ctrlLabel} Not in Email Format \n`;

      if (Input.errors.maxFileSize) tooltip += `${ctrlLabel} Maximum 5 MB \n`;

      if (Input.errors.ageRange) tooltip += `${ctrlLabel} accept ages between 22 and 100   \n`;
      if (Input.errors.duplicated) tooltip += `${ctrlLabel}  Already exists for this provider    \n`;
    }

    return tooltip;
  }