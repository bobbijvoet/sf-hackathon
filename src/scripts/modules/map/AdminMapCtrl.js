class AdminMapCtrl extends MapCtrl {
  constructor() {
    super();
  }

  showCrosshair() {
    this.crosshair = true;
  }

  openAddMarkerView() {
    this.$state.go('marker/add')
  }


}