/**
 * Created by bob on 27-3-15.
 */
class MapCtrl {

  constructor($state) {
	  var houten = [52.0306659, 5.1627295];
    this.map = L.map('map', {
      center: houten,
      zoom: 13
    });

    this.$state = $state;

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(this.map);

    this.marker = L.marker(houten, {id: 123}).addTo(this.map);

    this.marker.on('click', (event) => {
      this.$state.go('tab.marker', {id: event.target.options.id})
    });

  }


  showPopup(event) {

    //L.popup()
    //  .setLatLng([51.5, -0.09])
    //  .setContent(`<p>${event.target.options.id}<br /></p>`)
    //  .openOn(this.map);

    this.$state.go('marker', {id:event.target.options.id})

  }

  showCrosshair (){
    this.crosshair = true;
  }

  openAddMarkerView (){
    this.$state.go('marker/add')
  }
}

MapCtrl.$inject = ['$state'];


export default MapCtrl;
