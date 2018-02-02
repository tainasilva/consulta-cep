import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Coordinates } from './../models/coordinates.model';

@Injectable()
export class MapsService {

  constructor(private httpClient: HttpClient) { }

  getCoordinates(logradouro: string, bairro: string, localidade: string): Observable<Coordinates> {
    return this.httpClient.get<Coordinates>
    (`https://maps.googleapis.com/maps/api/geocode/json?address='${logradouro}'-'${bairro}'-'${localidade}`);
  }
}