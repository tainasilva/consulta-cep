import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Address } from './../models/address.model';

@Injectable()
export class CepService {
  
  constructor(private httpClient: HttpClient) { }

  getAddressByZipCode(zipcode: string): Observable<Address> {
    return this.httpClient.get<Address>(`https://viacep.com.br/ws/${zipcode}/json/`);
  }
}
