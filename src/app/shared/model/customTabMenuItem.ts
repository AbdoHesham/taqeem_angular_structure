import { MenuItem } from 'primeng/api';

export interface customTabMenuItem extends MenuItem {
  id?: string;
  parentId?: string;
  content;
  componentRef?;
  viewRef?;
  isValid?: boolean;
  AddButton?: boolean;
  AddButtonText?: string;
}

export enum ProviderTabs {
  'Provider Details',
  'Branch(s) Basics',
  // 'Assign Doctor',
  // 'Schedule & Service',
  // 'Payment & Insurance',
  // 'Assign Assistant (optional)',
}

export enum DoctorTabs {
  'Basic Information',
  'Education',
  'Experience',
}
