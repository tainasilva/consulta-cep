import { Component, Input } from '@angular/core';

import { Coordinates } from './../models/coordinates.model';

@Component({
  selector: 'app-maps-details',
  templateUrl: './maps-details.component.html'
})
export class MapsDetailsComponent {

  @Input() coordinates: Coordinates;

  constructor() { }

}
