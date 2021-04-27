const API_KEY = "e655bd79b4689af46468d897a33949f2"
const COORDS = "coords"

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude, longitude
  }
  saveCoords(coordsObj)
}

function handleGeoError() {
  console.log("Can't access geo location")
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS)
  if (loadedCoords === null) {
    askForCoords()
  } else {

  }
}
function init() {
  loadCoords()
}

init()