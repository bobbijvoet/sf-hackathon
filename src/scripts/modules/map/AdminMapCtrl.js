import MapCtrl from './../map/MapCtrl';


class AdminMapCtrl extends MapCtrl {
  constructor(MapService, $state) {
    super(MapService, $state);
  }

  showCrosshair() {
    this.crosshair = true;
  }

  openAddMarkerView() {
    this.$state.go('marker/add')
  }


}
AdminMapCtrl.$inject = ['MapService', '$state'];

export default AdminMapCtrl;