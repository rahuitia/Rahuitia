export function selectedpolygon () {
  return {
    type: 'SELECTED_POLYGON',
  }
}


export function saveCoordinates (coordsArr) {
  return {
      type: 'SAVE_COORDS',
      coords: coordsArr
  }
}


