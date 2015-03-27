function loadImageFileAsURL()
{

}

class MarkerCtrl {
  constructor($stateParams, FirebaseService, MapService) {
    //var marker = FirebaseService.getMarkers($stateParams.id);
    var marker = [ {
      "lat" : 55,
      "long" : 54,
      "points" : 10,
      "quest" : "Doe dit of dat",
      "details" : "These are details",
      "title" : "Amsterdam"
    } ];

    //this.distance = MapService.
    this.marker = marker[0];

    let inputElement = document.querySelector('[fileupload] input');

    inputElement.addEventListener('change', (event) => { // https://thiscouldbebetter.wordpress.com/2013/07/03/converting-a-file-to-a-base64-dataurl-in-javascript/
      var filesSelected = inputElement.files;
      if (filesSelected.length > 0)
      {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent)
        {
          FirebaseService.checkIn(marker['$$key'], fileLoadedEvent.target.result);
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

MarkerCtrl.$inject = ['$stateParams', 'FirebaseService'];
export default MarkerCtrl;

