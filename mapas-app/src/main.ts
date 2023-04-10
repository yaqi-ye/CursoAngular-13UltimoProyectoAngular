import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoibWFnZGllbG1zIiwiYSI6ImNreXB6ZXJ1azBjeXEybnMyYm01bHk0aHAifQ.8iVI9ERFXi5ET09QbKJcww';

if ( !navigator.geolocation ) {
  alert( 'El navegador no soporta la geolocalización.' );
  throw new Error( 'El navegador no soporta la geolocalización.' );
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
