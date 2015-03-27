class AddMarkerCtrl {
  constructor (MapService) {
    this.name = '';
    this.details = '';
    this.latLng = '';
    this.MapService = MapService;

  }

  //getMarkers(data){
  //console.log(data)
  //}


  addMarker(){
    this.MapService.addMarker()
  }
}

AddMarkerCtrl.$inject = ['MapService'];


export default AddMarkerCtrl;