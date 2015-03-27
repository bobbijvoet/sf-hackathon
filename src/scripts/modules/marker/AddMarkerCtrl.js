class AddMarkerCtrl {
  constructor (MapService, $state) {
    this.name = '';
    this.details = '';
    this.latLng = '';
    this.MapService = MapService;
    this.$state = $state;


  }

  //getMarkers(data){
  //console.log(data)
  //}


  addMarker(){
    this.MapService.addMarker().then(()=>{
      this.$state.go('tab.map', {}, {reload:true, cache:false});

    })
  }
}

AddMarkerCtrl.$inject = ['LeafletMapDirectiveCtrl', '$state'];


export default AddMarkerCtrl;