import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = '';

  constructor( private placesService: PlacesService,
               private mapService: MapService ) {}

  get isLoadingPlaces(): Boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo( place: Feature ) {
    this.selectedId = place.id;
    const [ lng, lat ] = place.center;
    this.mapService.flyTo([ lng, lat ]);
  }
}
