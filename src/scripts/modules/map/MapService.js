'use strict';

class MapService {
  constructor(FirebaseService) {
    this.FirebaseService = FirebaseService;

    var marker = FirebaseService.getMarkers($stateParams.id);

    this.map = L.map('map', {
      center: [52.0306659, 5.1627295],
      zoom: 3
    });

    L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day.grey.mobile/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
    	attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
    	subdomains: '1234',
    	mapID: 'newest',
    	app_id: 'Y8m9dK2brESDPGJPdrvs',
    	app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
    	base: 'base',
    	minZoom: 0,
    	maxZoom: 20
    }).addTo(this.map);

    this.marker = L.marker([51.5, -0.09], {id: 123}).addTo(this.map);

    this.myLocation = {lat:0, lng:0};
    this.map.locate({maxZoom: 5});
    this.map.on('locationfound', (event) => this.handleLocation(event));


  }

  getDistance(latLong = {lat: 51.5, lng: 0.09}) {
     return L.latLng(latLong).distanceTo(this.myLocation);
   }


  handleLocation (event){
    this.myLocation = event.latlng;
  }

  markers() {
    return [this.marker];
  }

  addMarker (){
    this.FirebaseService.setMarker( {
          id: 123,
          "lat" : 55,
          "long" : 54,
          "points" : 10,
          "quest" : "Doe dit of dat",
          "details" : "These are details",
          "title" : "Amsterdam"
        });
        //var marker = FirebaseService.getMarkers($stateParams.id);

  }
}

MapService.$inject = ['FirebaseService'];

export default MapService;
