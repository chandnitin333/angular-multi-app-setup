import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../../shell/src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class KaryaKaraniKametiService {

  constructor(private api: ApiService) { }

  fetchKarkaraniKamethi(params: any) {
    return this.api.post(`get-karyakarni-commitee-list`, params);
  }

}
