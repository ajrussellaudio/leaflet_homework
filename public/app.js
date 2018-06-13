const drawMap = function () {
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.86515, -4.25763];
  const javaStreet = [55.801507, -4.003805];

  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, javaStreet, zoomLevel);

  makeButton(mainMap);

  const locationButton = document.querySelector("#location");
  locationButton.addEventListener("click", function() {
    mainMap.currentLocation();
  });
}

const makeButton = function(map) {
  const button = document.getElementById("new-york-button");
  button.addEventListener("click", function() {
    map.moveMap([40.730610, -73.935242]);
  });
}

window.addEventListener("load", drawMap);
