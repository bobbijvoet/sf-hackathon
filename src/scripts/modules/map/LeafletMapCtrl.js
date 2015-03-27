'use strict';



class LeafletMapDirectiveCtrl {
  constructor(MapService) {
    console.log('oh hai', MapService);


    //this.map = L.map('map', {
    //  center: [52.0306659, 5.1627295],
    //  zoom: 3
    //});
    //
    //L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/normal.day.grey.mobile/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
    //  attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
    //  subdomains: '1234',
    //  mapID: 'newest',
    //  app_id: 'Y8m9dK2brESDPGJPdrvs',
    //  app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
    //  base: 'base',
    //  minZoom: 0,
    //  maxZoom: 20
    //}).addTo(this.map);

  }

  addMarker(marker){
  }

  static instance() {
    return new LeafletMapDirectiveCtrl();
  }
}

LeafletMapDirectiveCtrl.$inject = ['MapService'];

export default LeafletMapDirectiveCtrl;
