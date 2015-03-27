/**
 * Created by bob on 27-3-15.
 */
class MapCtrl {

  constructor(MapService, UserService, $state) {

    this.$state = $state;

    this.admin = UserService.role() === 'ADMIN';

    MapService.markers().forEach((item)=>
        item.on('click', (event) => {
          console.log(MapService.getDistance());
          this.$state.go('tab.marker', {id: event.target.options.id})
        })
    )
  }
}

MapCtrl.$inject = ['MapService', 'UserService','$state'];

export default MapCtrl;