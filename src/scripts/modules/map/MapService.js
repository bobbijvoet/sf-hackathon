'use strict';

class MapService {
  constructor() {
    //this.$http = $http;
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
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
    this.map.locate({setView: true, maxZoom: 15});
    this.map.on('locationfound', (event) => this.handleLocation(event));


  }

  getDistance (latLong = {lat:51.5,lng:0.09}){

    return L.GeometryUtil.distance(this.map, this.myLocation, latLong);
  }

  handleLocation (event){
    this.myLocation = event.latlng;



  }

  markers() {
    return [this.marker];
  }
}

//MapService.$inject = ['$http'];

export default MapService;
