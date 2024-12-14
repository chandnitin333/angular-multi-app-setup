import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../../shell/src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MalmataService {

  constructor(private api: ApiService) { }
  getMalmataList(params: any) {
    return this.api.post(`get-malmatta-list`, params);
  }
}
