function loadImageFileAsURL()
{

}

class MarkerCtrl {
  constructor($stateParams, FirebaseService, MapService, $scope) {
    var marker = FirebaseService.getMarkers($stateParams.id);

    this.marker = marker;
    this.distance = MapService.getDistance({lat: this.marker.lat, lng: this.marker.long});
    this.images = [];

    let self = this;

    let inputElement = document.querySelector('[fileupload] input');

    inputElement.addEventListener('change', (event) => { // https://thiscouldbebetter.wordpress.com/2013/07/03/converting-a-file-to-a-base64-dataurl-in-javascript/
      var filesSelected = inputElement.files;
      if (filesSelected.length > 0)
      {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent)
        {
          self.images.push(fileLoadedEvent.target.result);
          console.log($scope);
          $scope.$digest();
          //FirebaseService.checkIn(marker.id, fileLoadedEvent.target.result);
        };

        fileReader.readAsDataURL(fileToLoad);
      }
    }, false);
  }


  getDetails(){

  }

  checkIn() {

  }
}

MarkerCtrl.$inject = ['$stateParams', 'FirebaseService', 'MapService', '$scope'];
export default MarkerCtrl;

