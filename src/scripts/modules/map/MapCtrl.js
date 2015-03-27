/**
 * Created by bob on 27-3-15.
 */
class MapCtrl {
  constructor (){
    console.log('constructor');
    var map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13
    });

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map);
  }


  showPopup(){
    console.log("YES");

  }
}

export default MapCtrl;
