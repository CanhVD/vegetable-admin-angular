import { Injectable } from '@angular/core';
import { HttpHelper } from '../../../core/helpers/http.helper';
import { Observable } from 'rxjs';
import { PageRequest } from '../../../core/models/page-request.model';
import { BasePageResponse } from '../../../core/models/response.model';
import { toQueryParams } from 'src/app/core/helpers/format.helper';
import { Product } from '../models/product.model';
import { AppConstants } from 'src/app/core/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpHelper: HttpHelper) {}

  public getProducts(pageRequest: PageRequest): Observable<BasePageResponse<Product>> {
    return this.httpHelper.get(`${AppConstants.PRODUCT.SEARCH_PRODUCTS}?${toQueryParams(pageRequest)}`);
  }
}
