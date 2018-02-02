import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CepService } from './services/cep.service';

import { Address } from './models/address.model';
import { MapsService } from './services/maps.service';
import { Coordinates } from './models/coordinates.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {




  zipcodeModel = '';
  zipcodeMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  searchAddress: Address;

  searchCoordinates: Coordinates;

  constructor(
    private toastr: ToastrService,
    private viaCepService: CepService,
    private mapsService: MapsService
  ) { }

  onClickZipcode(zipcode: string) {
    zipcode = zipcode.replace('-', '');

    if (this.verifyZipcode(zipcode)) {
      this.viaCepService.getAddressByZipCode(zipcode)
        .subscribe(
          address => {
            if (address.erro === true) {
              this.searchAddress = undefined;
              this.toastr.warning('ZIP Code not found.', 'Ops...');
            } else {
              this.searchAddress = address;
            }
          },
          error => {
            this.toastr.error('Error: ${error.message}.', 'Ops...');
            this.searchAddress = undefined;
          }
        );
    } else {
      this.toastr.error('Enter a valid ZIP Code.', 'Ops...');
      this.searchAddress = undefined;
    }
  }

  verifyZipcode(zipcode: string): boolean {
    if (zipcode.length === 8) {
      return true;
    }

    return false;
  }

}
