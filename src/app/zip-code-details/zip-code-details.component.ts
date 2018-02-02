import { Component, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { Address } from '../models/address.model';
import { Coordinates} from '../models/coordinates.model';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-zip-code-details',
  templateUrl: './zip-code-details.component.html'
})
export class ZipCodeDetailsComponent {

  @Input() address: Address;

  lat: 51.678418;
  lng: 7.809007;
  
  constructor(
   private mapsService: MapsService
  ) { }

}
