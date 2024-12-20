import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../../shell/src/app/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class OtherTaxService {

    constructor(private api: ApiService) { }

    fetchOtherTaxList(params: any) {
        return this.api.post('get-other-tax-list', params);
    }

    fetchTaxList() {
        return this.api.post('get-tax-list', { page_number: 1, search_text: '', is_page: false });
    }

    addOtherTax(params: any) {
        return this.api.post(`add-other-tax`, params)
    }

    updateOtherTax(params: any) {
        return this.api.put(`update-other-tax`, params)
    }
}
