import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../../shell/src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class OpenPlotRatesService {

  constructor(private api: ApiService) { }

  getOpenPlotList(params: any) {
    return this.api.post(`get-open-plot-info-list`, params);
  }
}
