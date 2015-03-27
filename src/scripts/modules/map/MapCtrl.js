/**
 * Created by bob on 27-3-15.
 */
class MapCtrl {

  constructor(MapService, UserService, $state, bla) {

    this.$state = $state;

    console.log(bla, 'Resolving works!');
    this.admin = UserService.role() === 'ADMIN';

    console.log('heeeyooo');

    MapService.markers().then((data)=> {
      data.forEach((item)=> {
        item.on('click', (event) => {
          this.$state.go('tab.marker', {id: event.target.options.id})
        })
      })
    })
  }
}

MapCtrl.$inject = ['LeafletMapDirectiveCtrl', 'UserService', '$state', 'bla'];

export default MapCtrl;