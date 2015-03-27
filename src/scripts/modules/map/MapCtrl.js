/**
 * Created by bob on 27-3-15.
 */
class MapCtrl {

  constructor(MapService, $state) {

    this.$state = $state;

    MapService.markers().forEach((item)=>
        item.on('click', (event) => {
          console.log(MapService.getDistance());
          this.$state.go('tab.marker', {id: event.target.options.id})
        })
    )
  }
}

MapCtrl.$inject = ['MapService', '$state'];

export default MapCtrl;