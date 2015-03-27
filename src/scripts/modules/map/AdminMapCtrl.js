import MapCtrl from './../map/MapCtrl';


class AdminMapCtrl extends MapCtrl {
  constructor(MapService, UserService, $state) {
    super(MapService, UserService, $state);
  }

  showCrosshair() {
    this.crosshair = true;
  }

  openAddMarkerView() {
    this.$state.go('tab.addMarker')
  }


}
AdminMapCtrl.$inject = ['MapService', 'UserService','$state'];

export default AdminMapCtrl;