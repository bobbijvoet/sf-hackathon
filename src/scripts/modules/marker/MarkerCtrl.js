class MarkerCtrl {
  constructor($stateParams, FirebaseService) {
    //var marker = FirebaseService.getMarkers($stateParams.id);
    var marker = [ {
      "lat" : 55,
      "long" : 54,
      "points" : 10,
      "quest" : "Quest",
      "title" : "Amsterdam"
    } ];

    this.marker = marker[0];

  }


  getDetails(){

  }

  checkIn() {

  }
}

MarkerCtrl.$inject = ['$stateParams', 'FirebaseService'];
export default MarkerCtrl;

