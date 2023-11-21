import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TagColorService {
  constructor() {}
  
  getAppoientmentStatusSeverity(status: number) {
    switch (status) {
      case 1:
        return '#F59E0B';
      case 3:
        return '#EF4444';
      case 4:
        return '#3B82F6';

    }
  }
  getStatusSeverity(status: number) {
    
    switch (status) {
      case 1:
        return 'success';
      case 2:
        return 'warning';
      case 3:
        return 'danger';
      case 6:
        return 'warning';
    }
  }
  getPromoCodeStatusSeverity(status: number) {
    switch (status) {
      case 1:
        return '#22C55E';
      case 2:
        return '#3B82F6';
      case 3:
        return '#64748B';
      case 4:
        return '#6366F1';
      case 5:
        return '#64748B';
      case 6:
        return '#F59E0B';
    }
  }
}
