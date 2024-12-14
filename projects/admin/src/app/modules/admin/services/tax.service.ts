import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../../shell/src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(private api: ApiService) { }

  getTaxList(params: any) {
    return this.api.post(`get-tax-list`, params);
  }
}
